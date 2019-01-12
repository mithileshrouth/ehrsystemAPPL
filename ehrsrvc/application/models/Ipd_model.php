<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Ipd_model extends CI_Model{
    
	public function __construct() {
        parent::__construct();
		$this->load->model("Patient_model", "patient", TRUE);
	}
	

	public function insertIntoIPD($request,$hospital_id,$doctor_id) {
		
		try{
			
			$this->db->trans_begin();
			$ipd_master_data = [];
			$healthProfileArry = [];
			$todaydt = date("Y-m-d H:i:s");
			
			/*
			echo "<pre>";
			print_r($request);
			echo "</pre>";
			*/
			
			$formMasterData = $request->fdata;
			$selectedPatient = $formMasterData->choosePatientCtrl;
			
			$roomNo = $formMasterData->roomNoCtrl;
			$bedNo = $formMasterData->bedNoCtrl;
			$general_exm = (trim(htmlspecialchars($formMasterData->generalExaminationCtrl)));
			$systemic_exm = (trim(htmlspecialchars($formMasterData->systemicExaminationCtrl)));
			$provision_exm = (trim(htmlspecialchars($formMasterData->provisionalExaminationCtrl)));
			$final_dignosis = (trim(htmlspecialchars($formMasterData->finalDiagnosisCtrl)));
			
			$ipd_master_data = [
				"hospital_id" => $hospital_id,
				"admission_date" => date('Y-m-d H:i:s',strtotime($formMasterData->admissionDtCtrl)),
				"patient_id" => $selectedPatient->patient_id,
				"doctor_id" => $doctor_id,
				"room_no" => $roomNo,
				"bed_no" => $bedNo,
				"discharge_date" => NULL,
				"opd_prescription_id" => NULL,
				"illness_history" => NULL,
				"comment" => NULL,
				"discharge_flag" => 'N',
				"general_examination" => $general_exm,
				"systemic_examination" => $systemic_exm,
				"provision_diagnosis" => $provision_exm,
				"final_digonosis" => $final_dignosis
			];
			$this->db->insert('ipd_patient_master', $ipd_master_data); 
			$ipd_inserted_id = $this->db->insert_id();
			//$ipd_inserted_id = 0;
			
			
			$temp = trim($formMasterData->tempCtrl);
			$anemia = trim($formMasterData->haemoglobinCtrl);
			$bp = trim($formMasterData->bpCtrl);
			$jaundice = trim($formMasterData->jaundiceCtrl);
			$odema = trim($formMasterData->odemaCtrl);
			$height = trim($formMasterData->heightCtrl);
			$weight = trim($formMasterData->weightCtrl);
			$blood_sugar_f = trim($formMasterData->bldsugarFCtrl);
			$blood_sugar_pp = trim($formMasterData->bldsugarPPCtrl);
			
			
			
			$healthProfileArry = [
				"patient_id" => $selectedPatient->patient_id,
				"date" => date('Y-m-d',strtotime($formMasterData->admissionDtCtrl)),
				"prescription_addmission_id" => $ipd_inserted_id,
				"opd_ipd_flag" => "I",
				"pulse" => NULL,
				"temp" => $temp,
				"anemia" => $anemia, // haemoglobin 
				"bp" => $bp,
				"jaundice" => $jaundice,
				"odema" => $odema,
				"height" => $height,
				"weight" => $weight,
				"blood_sugar_f" => $blood_sugar_f,
				"blood_sugar_pp" => $blood_sugar_pp,
				"comment" => NULL
			];
			
			$this->db->insert('patient_health_profile', $healthProfileArry); 
			$healthprofile_inserted_id = $this->db->insert_id();
			
			$medInsert = $this->insertIntoMedicines($hospital_id,$ipd_inserted_id,$healthprofile_inserted_id,$request->medicines);
			$testReportinsert = $this->insertIntoTestReports($hospital_id,$ipd_inserted_id,$healthprofile_inserted_id,$request->reports);
			
			if($this->db->trans_status() === FALSE) {
                $this->db->trans_rollback();
				return false;
            } else {
				$this->db->trans_commit();
                return true;
            }
				
		}
		catch(Exception $exc){
			 echo $exc->getTraceAsString();
		}
		
	}
	
	
	public function saveIPDRegularVisit($request,$hospital_id,$doctor_id) {
		
		try{
			
			$this->db->trans_begin();
			$ipd_master_data = [];
			$healthProfileArry = [];
			$todaydt = date("Y-m-d H:i:s");
			$formMasterData = $request->fdata;
			
			$temp = trim($formMasterData->tempCtrl);
			$anemia = trim($formMasterData->haemoglobinCtrl);
			$bp = trim($formMasterData->bpCtrl);
			$jaundice = trim($formMasterData->jaundiceCtrl);
			$odema = trim($formMasterData->odemaCtrl);
			$height = trim($formMasterData->heightCtrl);
			$weight = trim($formMasterData->weightCtrl);
			$blood_sugar_f = trim($formMasterData->bldsugarFCtrl);
			$blood_sugar_pp = trim($formMasterData->bldsugarPPCtrl);
			$doctor_comment =  (trim(htmlspecialchars($formMasterData->doctorCommentCtrl)));
			
			$ipd_row_id =  trim($formMasterData->ipdRowIDCtrl); 
			$patient_id = trim($formMasterData->patientID); 
			
			$healthProfileArry = [
				"patient_id" => $patient_id,
				"date" => date('Y-m-d',strtotime($formMasterData->visitDtCtrl)),
				"prescription_addmission_id" => $ipd_row_id,
				"opd_ipd_flag" => "I",
				"pulse" => NULL,
				"temp" => $temp,
				"anemia" => $anemia, // haemoglobin 
				"bp" => $bp,
				"jaundice" => $jaundice,
				"odema" => $odema,
				"height" => $height,
				"weight" => $weight,
				"blood_sugar_f" => $blood_sugar_f,
				"blood_sugar_pp" => $blood_sugar_pp,
				"comment" => $doctor_comment
			];
			
			$this->db->insert('patient_health_profile', $healthProfileArry); 
			$healthprofile_inserted_id = $this->db->insert_id();
			
			$medInsert = $this->insertIntoMedicines($hospital_id,$ipd_row_id,$healthprofile_inserted_id,$request->medicines);
			$testReportinsert = $this->insertIntoTestReports($hospital_id,$ipd_row_id,$healthprofile_inserted_id,$request->reports);
			
			if($this->db->trans_status() === FALSE) {
                $this->db->trans_rollback();
				return false;
            } else {
				$this->db->trans_commit();
                return true;
            }
				
		}
		catch(Exception $exc){
			 echo $exc->getTraceAsString();
		}
		
	}
	
	
	
	public function saveIPDDischarge($request,$hospital_id,$doctor_id) {
	    
	    try{
	        
	        $this->db->trans_begin();
	        $ipd_master_data = [];
	        $healthProfileArry = [];
	        
	        $ipd_master_upd = [];
	        
	        $todaydt = date("Y-m-d H:i:s");
	        $formMasterData = $request->fdata;
	        
	        $temp = trim($formMasterData->tempCtrl);
	        $anemia = trim($formMasterData->haemoglobinCtrl);
	        $bp = trim($formMasterData->bpCtrl);
	        $jaundice = trim($formMasterData->jaundiceCtrl);
	        $odema = trim($formMasterData->odemaCtrl);
	        $height = trim($formMasterData->heightCtrl);
	        $weight = trim($formMasterData->weightCtrl);
	        $blood_sugar_f = trim($formMasterData->bldsugarFCtrl);
	        $blood_sugar_pp = trim($formMasterData->bldsugarPPCtrl);
	       
	        
	        $ipd_row_id =  trim($formMasterData->ipdRowIDCtrl);
	        $patient_id = trim($formMasterData->patientID);
	        
	        $nextCheckUpDt = NULL;
	        if(isset($formMasterData->nextCheckUpDt)) {
	            $nextCheckUpDt = date('Y-m-d H:i:s',strtotime($formMasterData->nextCheckUpDt));
	        }
	        
	        $instruction = trim(htmlspecialchars($formMasterData->instructionCommentCtrl));
	        $dischargeSummry = trim(htmlspecialchars($formMasterData->dischargeCommentCtrl));
	        $finalDiagnos = trim(htmlspecialchars($formMasterData->finalCommentCtrl));
	        
	        $referal_hospital_id = $formMasterData->reffHospitalCtrl;
	        
	           
	        $ipd_master_upd = [
	            "discharge_flag" => TRUE,
	            "discharge_date" => date('Y-m-d H:i:s',strtotime($formMasterData->dischargeDt)),
	            "next_checkup_dt" => $nextCheckUpDt,
	            "instruction" => $instruction,
	            "discharge_summary" => $dischargeSummry,
	            "final_digonosis" => $finalDiagnos,
	            "referral_id" => $referal_hospital_id
	        ];
	        
	     
	        $this->db->where('ipd_patient_master.admission_id', $ipd_row_id);
	        $this->db->update('ipd_patient_master', $ipd_master_upd);
	        
	        $healthProfileArry = [
	            "patient_id" => $patient_id,
	            "date" => date('Y-m-d H:i:s',strtotime($formMasterData->dischargeDt)),
	            "prescription_addmission_id" => $ipd_row_id,
	            "opd_ipd_flag" => "I",
	            "pulse" => NULL,
	            "temp" => $temp,
	            "anemia" => $anemia, // haemoglobin
	            "bp" => $bp,
	            "jaundice" => $jaundice,
	            "odema" => $odema,
	            "height" => $height,
	            "weight" => $weight,
	            "blood_sugar_f" => $blood_sugar_f,
	            "blood_sugar_pp" => $blood_sugar_pp,
	            "comment" => NULL
	        ];
	        
	        $this->db->insert('patient_health_profile', $healthProfileArry);
	        $healthprofile_inserted_id = $this->db->insert_id();
	        
	        $medInsert = $this->insertIntoMedicines($hospital_id,$ipd_row_id,$healthprofile_inserted_id,$request->medicines);
	        
	        
	        
	        if($this->db->trans_status() === FALSE) {
	            $this->db->trans_rollback();
	            return false;
	        } else {
	            $this->db->trans_commit();
	            return true;
	        }
	        
	    }
	    catch(Exception $exc){
	        echo $exc->getTraceAsString();
	    }
	    
	}
	
	
	
	private function insertIntoMedicines($hospital_id,$admission_id,$healthprofile_inserted_id,$medicineData){
		if(isset($medicineData)){
			$len = count($medicineData);
			$insert_arry = [];
			for($i=0; $i<$len; $i++){
				
				$medicinerow = $medicineData[$i]->medicinetd;
				$doserow = $medicineData[$i]->dosagetd;
				$frequencyrow = $medicineData[$i]->unittd;
					
				$insert_arry = [
					"hospital_id" => $hospital_id,
					"prescription_admission_id" => $admission_id,
					"opd_ipd_flag" => 'I',
					"medicine_id" => $medicinerow->id,
					"dose_id" => $doserow->id,
					"frequeny" => $frequencyrow->id,
					"number_of_days_sick_leave" => $medicineData[$i]->daystd,
					"health_profile_id" => $healthprofile_inserted_id
				];
				
				// insert query
				$this->db->insert('opd_ipd_medicine', $insert_arry); 
			}
			
		}
		
	}
	
	private function insertIntoTestReports($hospital_id,$admission_id,$health_profile_id,$reportsData){
		if(isset($reportsData)){
			$len = count($reportsData);
			$insert_arry = [];
			for($i=0; $i<$len; $i++){
				
				$testsrow = $reportsData[$i]->reports;
				
				$insert_arry = [
					"hospital_id" => $hospital_id,
					"prescription_addmission_id" => $admission_id,
					"opd_ipd_flag" => 'I',
					"test_id" => $testsrow->id,
					"date" => date('Y-m-d',strtotime($reportsData[$i]->invdate)),
					"health_profile_id" => $health_profile_id
				];
				$this->db->insert('opd_ipd_test', $insert_arry); 
			}
			
		}
	}
	
	
	
	
	/**
     * @name getIPDListByDt
     * @author Mithilesh Routh
     * @return $data
     * @desc get medicine by diagnosis list
     */
	
	public function getIPDListByDt($request,$hospital_id) {
		$resultdata = "";
		
		$searchDt = date("Y-m-d", strtotime($request->searchdt));
		/*
		$where = [
			"ipd_patient_master.hospital_id" => $hospital_id,
			"DATE_FORMAT(ipd_patient_master.admission_date,'%Y-%m-%d')" => $searchDt ,
			"ipd_patient_master.`discharge_flag`" => FALSE,
			"ipd_patient_master.`discharge_date`" => NULL
		]; 
		*/
		
		$where = [
			"ipd_patient_master.hospital_id" => $hospital_id,
			"ipd_patient_master.`discharge_flag`" => FALSE
		]; 
		
		$query = $this->db->select("
							patient_type.patient_type,
							patients.patient_name,
							patients.mobile_one , 
							patients.patient_code,
							patients.patient_id,
							ipd_patient_master.admission_id AS ipdID,
							ipd_patient_master.room_no,
							ipd_patient_master.bed_no,
							DATE_FORMAT(ipd_patient_master.admission_date,'%d-%m-%Y') AS admission_dt
							",FALSE)
                          ->from("ipd_patient_master") 
						  ->join("patients" , "patients.patient_id = ipd_patient_master.patient_id" , "INNER")
						  ->join("patient_type" , "patient_type.patient_type_id = patients.patient_type_id" , "LEFT")
						  ->where($where)
						  ->get();
						  
		//echo $this->db->last_query();
		
        if($query->num_rows()>0) {
            $resultdata=$query->result();
            }
        return $resultdata;
	}
	
	/**
	 * @name getIPDListByDt
	 * @author Mithilesh Routh
	 * @return $data
	 * @desc get medicine by diagnosis list
	 */
	
	public function getIPDDischargeListByDt($request,$hospital_id) {
	    $resultdata = [];
	    
	    $searchDt = date("Y-m-d", strtotime($request->searchdt));
	    /*
	     $where = [
	     "ipd_patient_master.hospital_id" => $hospital_id,
	     "DATE_FORMAT(ipd_patient_master.admission_date,'%Y-%m-%d')" => $searchDt ,
	     "ipd_patient_master.`discharge_flag`" => FALSE,
	     "ipd_patient_master.`discharge_date`" => NULL
	     ];
	     */
	    
	    $where = [
	        "ipd_patient_master.hospital_id" => $hospital_id,
	        "ipd_patient_master.`discharge_flag`" => TRUE
	    ];
	    
	    $query = $this->db->select("
							patient_type.patient_type,
							patients.patient_name,
							patients.mobile_one ,
							patients.patient_code,
							patients.patient_id,
							ipd_patient_master.admission_id AS ipdID,
							ipd_patient_master.room_no,
							ipd_patient_master.bed_no,
							DATE_FORMAT(ipd_patient_master.admission_date,'%d-%m-%Y') AS admission_dt
							",FALSE)
							->from("ipd_patient_master")
							->join("patients" , "patients.patient_id = ipd_patient_master.patient_id" , "INNER")
							->join("patient_type" , "patient_type.patient_type_id = patients.patient_type_id" , "LEFT")
							->where($where)
							->where("ipd_patient_master.discharge_date IS NOT NULL")
							->get();
							
							//echo $this->db->last_query();
							
							if($query->num_rows()>0) {
							    $resultdata=$query->result();
							}
							return $resultdata;
	}
	
	
	public function getIpdDetailInfoByID ($ipdadmissionid,$hospital_id){
		$patient_data = [];
		$where = [
			"ipd_patient_master.admission_id" => $ipdadmissionid,
			"patient_health_profile.opd_ipd_flag" => "I"
		];
		$query = $this->db->select("`patients`.`patient_id` as patientid,
									patients.`patient_code`,
									patients.`patient_name`,
									patients.`line_number`,
									patients.`division_number`,
									patients.`challan_number`,
									patients.`estate`,
									DATE_FORMAT(patients.`dob` , '%d-%m-%Y') AS dob_dt ,
									patients.`gender`,
									patients.`employee_id`,
									patients.`adhar`,
									patients.`mobile_one`,
									patients.`blood_group`,
									
									ipd_patient_master.discharge_flag,
									ipd_patient_master.room_no,
									ipd_patient_master.bed_no,
									ipd_patient_master.admission_id AS ipdID,
                                    ipd_patient_master.`discharge_date` AS dischargeDate,
                                    ipd_patient_master.`next_checkup_dt` AS nextChekUpDate,
                                    ipd_patient_master.final_digonosis,
                                    ipd_patient_master.discharge_summary,
                                    ipd_patient_master.instruction,
                                    ipd_patient_master.referral_id,
									
									patient_health_profile.`patient_health_profile_id`,
									patient_health_profile.pulse,
									patient_health_profile.temp,
									patient_health_profile.`anemia`,
									patient_health_profile.bp,
									patient_health_profile.`jaundice`,
									patient_health_profile.`odema`,
									patient_health_profile.`height`,
									patient_health_profile.`weight`,
									patient_health_profile.`blood_sugar_pp`,
									patient_health_profile.`blood_sugar_f`,
									patient_health_profile.`comment` AS doctorcomment,
									patient_health_profile.`prescription_addmission_id`
									" , FALSE)
							 ->from("ipd_patient_master") 
							 ->join("patient_health_profile","patient_health_profile.prescription_addmission_id = ipd_patient_master.admission_id","LEFT")
							 ->join("patients","patients.patient_id = ipd_patient_master.patient_id","LEFT")
							 ->where($where)
							 ->order_by("patient_health_profile.patient_health_profile_id","DESC")
							 ->limit(1)
							 ->get();
			// echo $this->db->last_query();		
		if($query->num_rows()>0){
				$patient_data = $query->row();
			}
        return $patient_data;
	}
	
	
	
	
	public function removeIPDDischareg($id,$upd_data,$hospital_id) {
	    try{
	        
	        $this->db->trans_begin();
	        
	        $health_profile_last_id = $this->getLastHealthProfileByTagID($id,"I");
	        
	        /*
	         * Delete last Health Profile ID Medicine
	         * Table : opd_ipd_medicine
	         */
	        $deleteMedicine = $this->deleteMedicineFromTbl($id,$health_profile_last_id,"I",$hospital_id);
	        
	        /*
	         * Delete last Health Profile 
	         * Table : patient_health_profile
	         */
	        
	        $deleteHealthProfile = $this->deleteHealthFromTbl($id,$health_profile_last_id,"I");
	        
	        $this->db->where('ipd_patient_master.admission_id', $id);
	        $this->db->update('ipd_patient_master', $upd_data);
	           
	        if($this->db->trans_status() === FALSE) {
	            $this->db->trans_rollback();
	            return false;
	        } else {
	            $this->db->trans_commit();
	            return true;
	        }
	        
	    }
	    catch(Exception $exc){
	        echo $exc->getTraceAsString();
	    }
	}
	
	
	
	public function getLastHealthProfileByTagID($id,$tag) {
	     $health_profile_id = 0;
	     $where = [
             "patient_health_profile.prescription_addmission_id" => $id ,
	         "patient_health_profile.opd_ipd_flag" => "I"
	     ];
        
        $query = $this->db->select("*")
				->from("patient_health_profile")
				->where($where)
				->order_by("patient_health_profile.patient_health_profile_id","DESC")
				->limit(1)
				->get();
         
		if($query->num_rows() > 0) {
		    $health_profile_row = $query->row();
		    $health_profile_id = $health_profile_row->patient_health_profile_id;
		}
		
		return $health_profile_id;
	    
	}
	
	private function deleteMedicineFromTbl($opd_ipd_id,$helathprofile_id,$tag,$hospital_id) {
	    try {
	        $this->db->trans_begin();
	        $where = [
	            "opd_ipd_medicine.prescription_admission_id" => $opd_ipd_id,
	            "opd_ipd_medicine.health_profile_id" => $helathprofile_id,
	            "opd_ipd_medicine.opd_ipd_flag" => $tag,
	            "opd_ipd_medicine.hospital_id" => $hospital_id
	        ];
	        $this->db->where($where);
	        $this->db->delete('opd_ipd_medicine');
	        if($this->db->trans_status() === FALSE) {
	            $this->db->trans_rollback();
	            return false;
	        } else {
	            $this->db->trans_commit();
	            return true;
	        }
	    }
	    catch(Exception $exc) {
	        echo $exc->getTraceAsString();
	    }
	}
	
	
	private function deleteHealthFromTbl($opd_ipd_id,$helathprofile_id,$tag) {
	    try {
	        $this->db->trans_begin();
	        $where = [
	            "patient_health_profile.prescription_addmission_id" => $opd_ipd_id,
	            "patient_health_profile.patient_health_profile_id" => $helathprofile_id,
	            "patient_health_profile.opd_ipd_flag" => $tag
	        ];
	        
	        $this->db->where($where);
	        $this->db->delete('patient_health_profile');
	        
	        if($this->db->trans_status() === FALSE) {
	            $this->db->trans_rollback();
	            return false;
	        } else {
	            $this->db->trans_commit();
	            return true;
	        }
	    }
	    catch(Exception $exc) {
	        echo $exc->getTraceAsString();
	    }
	}
		
	
	public function getIpdPatientVisitHistory ($patientID,$ipdAdmId,$hospital_id){
		$patient_data = [];
		$where = [
			"ipd_patient_master.patient_id" => $patientID,
			"patient_health_profile.opd_ipd_flag" => "I",
			"ipd_patient_master.admission_id" => $ipdAdmId
		];
		$query = $this->db->select("
								  `patients`.`patient_id` as patientid,
									patients.`patient_code`,
									patients.`patient_name`,
									ipd_patient_master.admission_id AS ipdID,
									DATE_FORMAT(patient_health_profile.`date`,'%d-%m-%Y') AS healthprofileDt,
									patient_health_profile.patient_health_profile_id,
									patient_health_profile.`comment` AS doctorcomment
									" , FALSE)
							 ->from("ipd_patient_master") 
							 ->join("patient_health_profile","patient_health_profile.prescription_addmission_id = ipd_patient_master.admission_id","LEFT")
							 ->join("patients","patients.patient_id = ipd_patient_master.patient_id","LEFT")
							 ->where($where)
							 ->order_by("patient_health_profile.date","DESC")
							// ->limit(1)
							 ->get();
			// echo $this->db->last_query();		
		if($query->num_rows()>0){
				//$patient_data = $query->result();

					foreach ($query->result() as $rows)
					{
						$patient_data[] = [
							"rowResultData" => $rows,
							"patienthealthProfileData" => $this->patient->getHealthProfileData($ipdAdmId,"I",$rows->patient_health_profile_id),
							"medicineDatas" => $this->medicine->getLastPrescMedicines($ipdAdmId,"I",$hospital_id,$rows->patient_health_profile_id),
							"investigationsData" => $this->investigation->getLastPrescTestReports($ipdAdmId ,"I",$hospital_id,$rows->patient_health_profile_id)
						];
						
					}
			}
        return $patient_data;
	}
   
}
