<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Symptom_model extends CI_Model{
	
	/**
     * @name getSymptoms
     * @author Mithilesh Routh
     * @return $data
     * @desc get all symptoms list
     */
    public function getSymptoms($hospitalid)
    {
        $resultdata = "";
		$where = [
			"symptoms.hospital_id" => $hospitalid
		];
	
		$query = $this->db->select("*")
                         ->from("symptoms") 
						  ->where($where)
						 ->order_by('symptoms.symptom')
                         ->get();
		
        if($query->num_rows()>0) {
            $resultdata=$query->result();
            }
        return $resultdata;
    }
    
	
	/**
     * @name getSymptoms
     * @author Mithilesh Routh
     * @return $data
     * @desc get all symptoms list
	 * @used in controller -- opd
     */
	public function getSymptomsDataByIds($symptoms , $hospital_id){
		
		$data = stringToArray($symptoms);
		$resultdata = "";
		$where = [
			"symptoms.hospital_id" => $hospital_id
		];
	
		$query = $this->db->select("*")
                         ->from("symptoms") 
						  ->where($where)
						  ->where_in('symptoms.symptom_id', $data)
						 ->order_by('symptoms.symptom')
                         ->get();
	//	echo $this->db->last_query();
        if($query->num_rows()>0) {
            $resultdata=$query->result();
        }
        return $resultdata;
	}
	
	
	
	
	
	
	

    
}
