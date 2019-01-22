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
    
    	/**
     * @name getSymptomsListByHospital
     * @author Shankha Ghosh
     * @return $data
     * @desc get Symptoms list
     */
	
	public function getSymptomsListByHospital($hospital_id){
		$data = "";
		$where = array('symptoms.hospital_id' =>$hospital_id);
		$query = $this->db->select("symptoms.*,hospitals.hospital_name")
				->from("symptoms")
				->where($where)
				->join("hospitals", "hospitals.hospital_id = symptoms.hospital_id", "INNER")
				->order_by('symptoms.symptom')->get();
		if($query->num_rows()>0){
            $data=$query->result();
        }
        return $data;
	}
	
	

	/**
     * @name insertIntoSymp
     * @author Shankha ghosh
     * @desc insert symptoms
     */

	public function insertIntoSymp($request,$hospital_id){
		
		try{
			
			$this->db->trans_begin();
			$insert_data = [];
		
			$todaydt = date("Y-m-d H:i:s");
            $sympForm = $request->fdata;
            $where = array('group_master.group_id' =>$sympForm->groupCtrl );

            $groupData = $this->commondatamodel->getSingleRowByWhereCls('group_master',$where);
          

			$symptomsArry = [
				"symptom" => $sympForm->symptomsCtrl, 
				"group" => $groupData->group, 
				"group_master_id" => $sympForm->groupCtrl, 
				"hospital_id" => $hospital_id
				
			];
			
			$this->db->insert('symptoms', $symptomsArry); 
			
		
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
	
	
	
	

    
}
