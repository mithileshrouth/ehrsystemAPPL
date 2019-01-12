<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Disease_model extends CI_Model{
    
	
    /**
     * @name getDiseaseBySymptoms
     * @author Mithilesh Routh
     * @return $data
     * @desc get disease list filter by symptoms
     */
    public function getDiseaseBySymptoms($hospitalid,$request)
    {
        $resultdata = "";
		$where = [
			"diagonosis.hospital_id" => $hospitalid
		];
		
		$values = $request->symptom;
		$symptomsID = [];
		for($i = 0; $i < count($values) ; $i++){
			array_push($symptomsID , $values[$i]->id);
		}
		
	
		
		$query = $this->db->select("diagonosis.diagonosis_id,diagonosis.diagonosis_name")
                         ->from("symptoms_diagonosis_map") 
						  ->join("diagonosis","diagonosis.diagonosis_id = symptoms_diagonosis_map.diagonosis_id","INNER")
						 ->order_by('diagonosis.diagonosis_name')
						 /* Temporary Blocked This Line on 01.12.2018  
							Don't remove this line
							->where_in('symptoms_diagonosis_map.symptom_id', $symptomsID)
						 */
						 ->where($where)
                         ->get();
		//echo $this->db->last_query();
        if($query->num_rows()>0) {
            $resultdata=$query->result();
            }
        return $resultdata;
    }
	
	
	
	/**
     * @name getDiseaseBySymptoms
     * @author Mithilesh Routh
     * @return $data
     * @desc get disease list filter by symptoms
    */
	
    public function getDiseaseBySymptomsIds($symptoms , $hospitalid)
    {
        $resultdata = "";
		$where = [
			"diagonosis.hospital_id" => $hospitalid
		];
		
		$array = stringToArray($symptoms);
		$query = $this->db->select("diagonosis.diagonosis_id,diagonosis.diagonosis_name")
                         ->from("symptoms_diagonosis_map") 
						  ->join("diagonosis","diagonosis.diagonosis_id = symptoms_diagonosis_map.diagonosis_id","INNER")
						 ->order_by('diagonosis.diagonosis_name')
						 ->where_in('symptoms_diagonosis_map.symptom_id', $array)
						 ->where($where)
                         ->get();
		
		if($query->num_rows()>0) {
            $resultdata=$query->result();
            }
        return $resultdata;
    }
    
	

    
}
