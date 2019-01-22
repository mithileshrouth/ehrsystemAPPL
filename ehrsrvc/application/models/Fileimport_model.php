<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Fileimport_model extends CI_Model{


    	/**
     * @name insertIntoDiag
     * @author Shankha ghosh
     * @desc insert diagonosis
     */

	public function insertIntoEmployee($request,$hospital_id){
		
		try{
			
			$this->db->trans_begin();
			$insert_data = [];
		
			$todaydt = date("Y-m-d H:i:s");
            $EmpData = $request->fdata;
            
           // pre($EmpData);

            foreach ($EmpData as $key => $value) {
             
                $dob=$value->dob->value;
                if($dob!=""){
                    $dob = str_replace('/', '-', $dob);
                    $dob = date("Y-m-d",strtotime($dob));
                }
                else{
                    $dob = NULL;
                }

                $doj=$value->doj->value;
                if($doj!=""){
                $doj = str_replace('/', '-', $doj);
                $doj = date("Y-m-d",strtotime($doj));
                }
                else{
                    $doj = NULL;
                }
                
              

            $employeeArray= [
                "estate_name" => $value->estate_name->value,
                "employee_code" => $value->employee_code->value,
                "pf_no" => $value->pf_no->value,
                "employee_name" => $value->employee_name->value,
                "father_name" => $value->father_name->value,
                "division_or_departm" => $value->division_or_departm->value,
                "category" => $value->category->value,
                "dob" => $dob,
                "doj" => $doj,
                "age" => $value->age->value,
                "year_of_service" => $value->year_of_service->value,
                "hospital_id" => $hospital_id
            ];

			
			$this->db->insert('test_employee', $employeeArray); 
            
        }//end of foreach
		
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



}//end of class