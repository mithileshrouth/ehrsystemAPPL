<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Ipd extends CI_Controller{
    public function __construct() {
        parent::__construct();
        $this->load->model("User_model", "user", TRUE);
        $this->load->model("Authorization_model", "authorisation", TRUE);
		$this->load->model("Ipd_model", "ipd", TRUE);
		$this->load->model("Symptom_model", "symptom", TRUE);
		$this->load->model("Disease_model", "disease", TRUE);
		$this->load->model("Medicine_model", "medicine", TRUE);
		$this->load->model("Investigation_model", "investigation", TRUE);

        
    }

	public function registerIPD()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
        
        if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
        
		$server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
           
        }
       
        if($client_token!=""){
        if($client_token->jti==$server_token ){
			
			$token_data = $client_token->data;
			$hospital_id = $token_data->hospital_id;
			$doctor_id = $token_data->doctor_id;
		
            $postdata = file_get_contents("php://input");
			$request = json_decode($postdata);
			
			
            $register = $this->ipd->insertIntoIPD($request,$hospital_id,$doctor_id);
			if($register){
				$json_response = [
                    "msg_status"=>HTTP_SUCCESS,
                    "msg_data"=>"SUCCESS",
                ];
			}
			else{
				$json_response = [
                    "msg_status"=>HTTP_SUCCESS,
                    "msg_data"=>"There is some problem.Please try again",
                ];
			}
            
        }else{
            $json_response = [
                                "msg_status"=>HTTP_AUTH_FAIL,
                                "msg_data"=>"Authentication fail."
            ];
        }
        }else{
             $json_response = [
                                "msg_status"=>HTTP_AUTH_FAIL,
                                "msg_data"=>"Authentication fail."
            ];

        }
        header('Content-Type: application/json');
	echo json_encode( $json_response );
	exit;
        
      
    }
	
	

	
	
	
	public function getIPDListByDt()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
		if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
		
		$server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
           
        } 
        if($client_token!=""){
        if($client_token->jti==$server_token ){
        
		$token_data = $client_token->data;
		$hospital_id = $token_data->hospital_id;
		
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		
        $resultdata = $this->ipd->getIPDListByDt($request,$hospital_id);
           
		$json_response = [
                "msg_status"=>HTTP_SUCCESS,
                "msg_data"=>"Authentication ok.",
                "result"=>$resultdata
        ];
		
        }else {
            $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];
        }
        } else{
             $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];

        }
        header('Content-Type: application/json');
		echo json_encode( $json_response );
		exit;
    }
    
    public function getIPDDischargeListByDt()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
        if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
        
        $server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
            
        }
        if($client_token!=""){
            if($client_token->jti==$server_token ){
                
                $token_data = $client_token->data;
                $hospital_id = $token_data->hospital_id;
                
                $postdata = file_get_contents("php://input");
                $request = json_decode($postdata);
                
                $resultdata = $this->ipd->getIPDDischargeListByDt($request,$hospital_id);
                
                $json_response = [
                    "msg_status"=>HTTP_SUCCESS,
                    "msg_data"=>"Authentication ok.",
                    "result"=>$resultdata
                ];
                
            }else {
                $json_response = [
                    "msg_status"=>HTTP_AUTH_FAIL,
                    "msg_data"=>"Authentication fail."
                ];
            }
        } else{
            $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];
            
        }
        header('Content-Type: application/json');
        echo json_encode( $json_response );
        exit;
    }
	
	
	public function getIpdDetailInfoByID() {
		CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
		if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
		
		$server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
           
        } 
        if($client_token!=""){
        if($client_token->jti==$server_token ){
        
		$token_data = $client_token->data;
		$hospital_id = $token_data->hospital_id;
		
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		
		$ipdadmissionid = $request->ipdid;
		
        $resultdata = $this->ipd->getIpdDetailInfoByID($ipdadmissionid,$hospital_id);
           
		$json_response = [
                "msg_status"=>HTTP_SUCCESS,
                "msg_data"=>"Authentication ok.",
                "result"=>$resultdata,
				"medicineInfo" => $this->medicine->getLastPrescMedicines($resultdata->ipdID,"I",$hospital_id,$resultdata->patient_health_profile_id),
				"reportsInfo" => $this->investigation->getLastPrescTestReports($resultdata->prescription_addmission_id,"I",$hospital_id,$resultdata->patient_health_profile_id)
        ];
		
        }else {
            $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];
        }
        } else{
             $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];

        }
        header('Content-Type: application/json');
		echo json_encode( $json_response );
		exit;
	}
	
	
	public function saveIPDRegularVisit()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
        
        if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
        
		$server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
           
        }
       
        if($client_token!=""){
        if($client_token->jti==$server_token ){
			
			$token_data = $client_token->data;
			$hospital_id = $token_data->hospital_id;
			$doctor_id = $token_data->doctor_id;
		
            $postdata = file_get_contents("php://input");
			$request = json_decode($postdata);
			
			
            $register = $this->ipd->saveIPDRegularVisit($request,$hospital_id,$doctor_id);
			if($register){
				$json_response = [
                    "msg_status"=>HTTP_SUCCESS,
                    "msg_data"=>"SUCCESS",
                ];
			}
			else{
				$json_response = [
                    "msg_status"=>HTTP_SUCCESS,
                    "msg_data"=>"There is some problem.Please try again",
                ];
			}
            
        }else{
            $json_response = [
                                "msg_status"=>HTTP_AUTH_FAIL,
                                "msg_data"=>"Authentication fail."
            ];
        }
        }else{
             $json_response = [
                                "msg_status"=>HTTP_AUTH_FAIL,
                                "msg_data"=>"Authentication fail."
            ];

        }
        header('Content-Type: application/json');
	echo json_encode( $json_response );
	exit;
        
      
    }
    
    
    /**
     * @author Mithilesh
     * @date   19.12.2018
     * @desc   Save dischareg data against ipd
     */
    
    public function saveIPDDischarge()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
        
        if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
        
        $server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
            
        }
        
        if($client_token!=""){
            if($client_token->jti==$server_token ){
                
                $token_data = $client_token->data;
                $hospital_id = $token_data->hospital_id;
                $doctor_id = $token_data->doctor_id;
                
                $postdata = file_get_contents("php://input");
                $request = json_decode($postdata);
                
                
                $register = $this->ipd->saveIPDDischarge($request,$hospital_id,$doctor_id);
                if($register){
                    $json_response = [
                        "msg_status"=>HTTP_SUCCESS,
                        "msg_data"=>"SUCCESS",
                    ];
                }
                else{
                    $json_response = [
                        "msg_status"=>HTTP_SUCCESS,
                        "msg_data"=>"There is some problem.Please try again",
                    ];
                }
                
            }else{
                $json_response = [
                    "msg_status"=>HTTP_AUTH_FAIL,
                    "msg_data"=>"Authentication fail."
                ];
            }
        }else{
            $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];
            
        }
        header('Content-Type: application/json');
        echo json_encode( $json_response );
        exit;
        
        
    }
    
    
    
    
    /**
     * @author Mithilesh
     * @date   19.12.2018
     * @desc   Save dischareg data against ipd
     */
    
    public function removeIPDDischarge()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
        
        if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
        
        $server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
            
        }
        
        if($client_token!=""){
            if($client_token->jti==$server_token ) {
                
                $token_data = $client_token->data;
                $hospital_id = $token_data->hospital_id;
                $doctor_id = $token_data->doctor_id;
                
                $postdata = file_get_contents("php://input");
                $request = json_decode($postdata);
                $ipdRow_ID =  $request->id;
                
                $update_data = [
                    "discharge_date" => NULL , 
                    "final_digonosis" => NULL , 
                    "discharge_flag" => FALSE , 
                    "referral_id" => NULL , 
                    "next_checkup_dt" => NULL , 
                    "instruction" => NULL  ,
                    "discharge_summary" => NULL  
                ];
                
                $updated = $this->ipd->removeIPDDischareg($ipdRow_ID,$update_data,$hospital_id);
                
                if($updated){
                    $json_response = [
                        "msg_status"=>HTTP_SUCCESS,
                        "msg_data"=>"SUCCESS",
                    ];
                }
                else{
                    $json_response = [
                        "msg_status"=>HTTP_FAIL,
                        "msg_data"=>"There is some problem.Please try again",
                    ];
                }
                
            }else{
                $json_response = [
                    "msg_status"=>HTTP_AUTH_FAIL,
                    "msg_data"=>"Authentication fail."
                ];
            }
        }else{
            $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];
            
        }
        header('Content-Type: application/json');
        echo json_encode( $json_response );
        exit;
        
        
    }



    public function getIpdPatientVisitHistory() {
		CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();
		if(CUSTOMHEADER::getAuthotoken($headers)){$client_token = CUSTOMHEADER::getAuthotoken($headers);}else{$client_token = "";}
		
		$server_token="";
        if($client_token!=""){
            $server_token = $this->authorisation->getToken($client_token->jti)->web_token;
           
        } 
        if($client_token!=""){
        if($client_token->jti==$server_token ){
        
		$token_data = $client_token->data;
		$hospital_id = $token_data->hospital_id;
		
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		
		$patientID = $request->pid;
		$ipdAdmID = $request->admid;
		
        $resultdata = $this->ipd->getIpdPatientVisitHistory($patientID,$ipdAdmID,$hospital_id);
           
		$json_response = [
                "msg_status"=>HTTP_SUCCESS,
                "msg_data"=>"Authentication ok.",
                "result"=>$resultdata
		];
		
        }else {
            $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];
        }
        } else{
             $json_response = [
                "msg_status"=>HTTP_AUTH_FAIL,
                "msg_data"=>"Authentication fail."
            ];

        }
        header('Content-Type: application/json');
		echo json_encode( $json_response );
		exit;
	}
	
	
	private function getAge($dob){
		$dateOfBirth = date('d-m-Y',strtotime($dob));
		$today = date("Y-m-d");
		$diff = date_diff(date_create($dateOfBirth), date_create($today));
		return $diff->format('%y');
	}

	    
    
}
