<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Vaccination_model extends CI_Model{
    
    public function __construct() {
        parent::__construct();
        $this->load->model("Opd_model", "opd", TRUE);
        $this->load->model("Patient_model", "patient", TRUE);
    }
    
	/**
     * @name getVaccinationSchedule
     * @author Mithilesh Routh
     * @return $data
     * @desc get vaccination schedule for from constant file (file location : config -> constants.php )
     */
	
	public function getVaccinationSchedule() {
	    
	    $data = [];
		$vaccine_schedule = VACCINE;
        $vaccine_schedule_ary = unserialize($vaccine_schedule);
        return $vaccine_schedule_ary;
        
    }
	
    
    
    
    public function getPatientVaccineListByScheduleFor($schedule,$patient_id) {
        $data = [];
        $where = [
            "vaccination_master.schedule_for" => $schedule
        ];
        
        $query = $this->db->select("vaccination_master.*")
                          ->from("vaccination_master")
                          ->where($where)
                          ->get();
        
                         // echo $this->db->last_query();
        
        if($query->num_rows()>0) {
            $row = $query->result();
            
            foreach ($query->result() as $rows) {
               $data[] = [
                   'vaccinData' => $rows , 
                   'patientVaccineData' => $this->getVaccinGivenDate($rows->id, $patient_id)
               ];
            }
            
        }
        return $data;
        
    }
    
    private function getVaccinGivenDate($vaccinID , $patientID) {
          $data = [];
          $where = [
              "patient_vaccination.vaccination_master_id" => $vaccinID,
              "patient_vaccination.patient_id" => $patientID
          ];
          
          $query = $this->db->select("patient_vaccination.*",FALSE)
          ->from("patient_vaccination")
          ->where($where)
          ->get();
          if($query->num_rows()>0) {
              $row = $query->row();
               // $givenDate = $row->vaccin_given_date;
              $data = $row;
          }
          
          return $data;
          
    }
	
    
    public function insertIntoVaccination($request,$hospital_id,$doctor_id) {
      
        try{
           
           $this->db->trans_begin();
           $vaccine_data = [];
           $todaydt = date("Y-m-d H:i:s");
           $opdPrescriptionArry = [];
         
           /*
            echo "<pre>";
            print_r($request);
            echo "</pre>";
            exit;*/
            
            $patientvaccinInfo = $request->patientinfo;
            
            // Health Profile Data
            $healthPrf = $request->patientHealthInfo;
            
            $pcode = $healthPrf->hdnpatientID;
            
            $patientid = $this->patient->getPatientByCode($pcode)->patient_id;
            $opdPrecesptionID = $this->opd->getLatestPrescriptionID($hospital_id);
            
            $registrationID = $healthPrf->hdnregistrationID;
            
            $pulse = $healthPrf->pulse;
            $tempratute = $healthPrf->tempratute;
            $anaemia = $healthPrf->anaemia;
            $bp = $healthPrf->bp;
            $jaundice = $healthPrf->jaundice;
            $odema = $healthPrf->odema;
            $height = $healthPrf->height;
            $weight = $healthPrf->weight;
            
            // Additional Comment
            $add_data = $request->additionalData;
            $doctors_comment = $add_data->doctorsComment;
            
            $opdPrescriptionArry = [
                "opd_prescription_id" => $opdPrecesptionID,
                "registrationid" => $registrationID,
                "hospital_id" => $hospital_id,
                "date" => $todaydt,
                "patient_id" => $patientid,
                "doctor_id" => $doctor_id,
                "accidental_approval" => FALSE,
                "symptom_list" => NULL,
                "diagonised_list" => NULL,
                "sick_flag" => NULL,
                "no_of_days_sick" => NULL,
                "ipd_reco_flag" => "O",
                "hospital_rec_flag" => NULL,
                "referal_hospital_id" => NULL,
                "keep_in_observation" => NULL,
                "comments" => $doctors_comment, // Doctors comment for vaccination
                "prescription_from" => "VACCINATION"
            ];
            
            /*
            echo "<pre>";
            print_r($opdPrescriptionArry);
            echo "</pre>";
            exit();
            */ 
            
            $this->db->insert('opd_prescription', $opdPrescriptionArry);
            $opd_precp_id = $this->db->insert_id();
            
            $healthProfileArry = [
                "patient_id" => $patientid,
                "date" => $todaydt,
                "prescription_addmission_id" => $opd_precp_id,
                "opd_ipd_flag" => 'O',
                "pulse" => $pulse,
                "temp" => $tempratute,
                "anemia" => $anaemia,
                "bp" => $bp,
                "jaundice" => $jaundice,
                "odema" => $odema,
                "height" => $height,
                "weight" => $weight,
                "comment" => NULL
            ];
            
            $this->db->insert('patient_health_profile', $healthProfileArry);
            $healthprofile_inserted_id = $this->db->insert_id();
            
            $vaccineDtlData = $request->vaccineGivenData;
           
            
            
           if(isset($vaccineDtlData)) {
                    
                    $scheduleFor = $patientvaccinInfo->scheduleForCtrl;
                    // delete patient_vaccination 
                    $delete = $this->deletePatientVaccin($patientid,$scheduleFor);
               
                   $vaccinRows =  $vaccineDtlData->vaccinRows;
                   $len = count($vaccineDtlData->vaccinRows);
                   $insert_arry = [];
                   
                  
                   for($i=0; $i<$len; $i++) {
                       $patientID = $vaccinRows[$i]->patientHdnID;
                       $vaccinMasterID = $vaccinRows[$i]->vaccinID;
                       $vaccingivendtlID = $vaccinRows[$i]->vaccinGivenID;
                       $vaccinGivenDt = $vaccinRows[$i]->vaccinGivenDt;
                       
                       $vaccine_given_date = NULL;
                       if(isset($vaccinGivenDt)) {
                           $vaccine_given_date = date('Y-m-d H:i:s',strtotime($vaccinGivenDt));
                       } 
                       
                       $insert_arry = [
                           "patient_vaccination.hospital_id" => $hospital_id,
                           "patient_vaccination.patient_id" => $patientID,
                           "patient_vaccination.vaccination_master_id" => $vaccinMasterID,
                           "patient_vaccination.vaccin_given_date" => $vaccine_given_date,
                           "patient_vaccination.opd_ipd_id" => $opd_precp_id,
                           "patient_vaccination.opd_ipd_flag" => "O"
                       ];
                       
                       // insert query
                       $this->db->insert('patient_vaccination', $insert_arry);
                   }
           }
           
           $updArry = [
               "registration.served_flag" => 'Y'
           ];
           
           $whereReg = [
               "registration.registration_id" => $registrationID,
               "registration.hospital_id" => $hospital_id
           ];
           
           $this->db->where($whereReg);
           $this->db->update('registration', $updArry); 
           
          if($this->db->trans_status() === FALSE) {
               $this->db->trans_rollback();
               return false;
           } else {
               $this->db->trans_commit();
               $returnData = [];
				$returnData = [
					"prescription" => $opd_precp_id,
					"healthprfl" => $healthprofile_inserted_id
                ];
                return $returnData;
               //return true;
           }
           
       }
       catch(Exception $exc){
           echo $exc->getTraceAsString();
       }
       
    }
    
    private function deletePatientVaccin($patient_id,$vaccinFor) {
        
       $sql = "DELETE patient_vaccination
                FROM patient_vaccination
                INNER JOIN `vaccination_master` ON vaccination_master.`id` = patient_vaccination.`vaccination_master_id`
                WHERE 
                 vaccination_master.`schedule_for` = '".$vaccinFor."' AND patient_vaccination.`patient_id` = ".$patient_id;
        
       $query = $this->db->query($sql);
      // echo $this->db->last_query();
       if( $query ){ return TRUE;}else{return FALSE;}
       
    }

    
}
