<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Investigation_model extends CI_Model{
    
	/**
     * @name getInvestigations
     * @author Mithilesh Routh
     * @return $data
     * @desc get investigation list
     */
	
	public function getInvestigations(){
		$data = "";
		$query = $this->db->select("*")->from("investigation")->order_by('investigation.investigation_name')->get();
		if($query->num_rows()>0){
            $data=$query->result();
        }
        return $data;
	}
	
	public function getLastPrescTestReports($admissionid ,$flag,$hospital_id,$healthprofile_id=NULL) {
		$resultdata = "";
		$where = [
			"opd_ipd_test.hospital_id" => $hospital_id , 
			"opd_ipd_test.prescription_addmission_id" => $admissionid , 
			"opd_ipd_test.opd_ipd_flag" => $flag,
			"opd_ipd_test.health_profile_id" => $healthprofile_id
		];
	
		$query = $this->db->select("opd_ipd_test.* , 
									investigation.investigation_name
									")
                         ->from("opd_ipd_test") 
						 ->join("investigation","investigation.investigation_id = opd_ipd_test.test_id","INNER")
						 ->where($where)
						 ->get();
		//echo $this->db->last_query();
        if($query->num_rows()>0) {
            $resultdata=$query->result();
        }
        return $resultdata;
	}

    
}
