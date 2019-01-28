<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Fileimport extends CI_Controller{
    public function __construct() {
        parent::__construct();
        $this->load->model("User_model", "user", TRUE);
        $this->load->model("Authorization_model", "authorisation", TRUE);
		$this->load->model("Medicine_model", "medicine", TRUE);
		$this->load->model("Diagonosis_model", "diagonosis", TRUE);
		$this->load->model("Fileimport_model", "fileimport", TRUE);
        $this->load->library('excel');//load PHPExcel library
       
        
        ini_set('memory_limit', '960M');
        ini_set('post_max_size', '640M');
        ini_set('upload_max_filesize', '640M');
        ini_set('max_execution_time', 0);


        
    }
    public function index()
    {
      echo "string";
    }
// patient Excel file
  public function insertIntoTemp(){

    CUSTOMHEADER::getCustomHeader();
    $json_response = [];
    $headers = $this->input->request_headers();
    //pre($headers);


    if($_FILES['file']['error']!=4)
	{
        

            $tempFile = $_FILES['file']['tmp_name'];
            //$extension = ".xls";
        
            $array = explode('.', $_FILES['file']['name']);
            $extension = end($array);

                
                if($extension=="xls")
                {
                    $objReader= PHPExcel_IOFactory::createReader('Excel5');	// For excel 2007 	  
                }
                else
                {           	
                    $objReader= PHPExcel_IOFactory::createReader('Excel2007');	// For excel 2007 	  
                }

                $filename =  $tempFile;
				
				$objReader->setReadDataOnly(true); 		
				$objPHPExcel=$objReader->load($filename);
		        $totalrows=$objPHPExcel->setActiveSheetIndex(0)->getHighestRow();   //Count Numbe of rows avalable in excel      	 
		        $objWorksheet=$objPHPExcel->setActiveSheetIndex(0); 
                $totalcolumn = $objPHPExcel->setActiveSheetIndex(0)->getHighestDataColumn();
                

                for($i=2;$i<=$totalrows;$i++)
		        { 
                   
                    $estate_name[] = array(
                        "error" =>  $this->isValidEstateStatus($objWorksheet->getCellByColumnAndRow(0,$i)->getValue()),
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(0,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(0,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(0,$i)->getValue()  ),
                    );

                    $employee_code[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(1,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(1,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(1,$i)->getValue()  ),
                    );

                    $pf_no[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(2,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(2,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(2,$i)->getValue()  ),
                    );

                    $employee_name[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(3,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(3,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(3,$i)->getValue()  ),
                    );

                    $father_name[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(4,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(4,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(4,$i)->getValue()  ),
                    );

                    $division_or_departm[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(5,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(5,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(5,$i)->getValue()  ),
                    );

                    $category[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(6,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(6,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(6,$i)->getValue()  ),
                    );

                    
                    $dob[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(7,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(7,$i)->getValue() == "" ? NULL : date('d-m-Y', PHPExcel_Shared_Date::ExcelToPHP($objWorksheet->getCellByColumnAndRow(7,$i)->getValue())) ),
                    );

                    $doj[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(8,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(8,$i)->getValue() == "" ? NULL : date('d-m-Y', PHPExcel_Shared_Date::ExcelToPHP($objWorksheet->getCellByColumnAndRow(8,$i)->getValue())) ),
                    );

                    $age[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(9,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(9,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(9,$i)->getValue()  ),
                    );

                    $year_of_service[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(10,$i)->getColumn().$i,
                        "value" =>  round(($objWorksheet->getCellByColumnAndRow(10,$i)->getValue() == "" ? "" :$objWorksheet->getCellByColumnAndRow(10,$i)->getValue()  )),
                    );


                }//end of row for loop 

                $json_response= [
                    "msg_status" => HTTP_SUCCESS,
                    "msg_data" => "Authentication ok.",
                    "estate_name" => $estate_name,
                    "employee_code" => $employee_code,
                    "pf_no" => $pf_no,
                    "employee_name" => $employee_name,
                    "father_name" => $father_name,
                    "division_or_departm" => $division_or_departm,
                    "category" => $category,
                    "dob" => $dob,
                    "doj" => $doj,
                    "age" => $age,
                    "year_of_service" => $year_of_service
                ];
    }//end of file check


    


//exit;
   


header('Content-Type: application/json');
echo json_encode( $json_response );
exit;

    }



    public function insertIntoEmployee()
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
          
        
            $register = $this->fileimport->insertIntoEmployee($request,$hospital_id);
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



/*
	@return type boolean
	@method isValidPreTrainingStatus(pretrainingstatus)
	@date  26.03.2018
*/
private function isValidEstateStatus($estate_name)
{
   


        if($estate_name!="")
        {
            $where = array("estate.name"=>trim($estate_name));
            $isexist = $this->commondatamodel->checkExistanceData('estate',$where);
            if($isexist>=1)
            {
                return 0;
            }
            else
            {
                return 1;
            }


        }
        else
        {
            return 0;
        }
            
    
   
}



public function verifyGrnFile()
    {
        CUSTOMHEADER::getCustomHeader();
        $json_response = [];
        $headers = $this->input->request_headers();

        if($_FILES['file']['error']!=4)
        { 
            $tempFile = $_FILES['file']['tmp_name'];
            //$extension = ".xls";
        
            $array = explode('.', $_FILES['file']['name']);
            $extension = end($array);

                
                if($extension=="xls")
                {
                    $objReader= PHPExcel_IOFactory::createReader('Excel5');	// For excel 2007 	  
                }
                else
                {           	
                    $objReader= PHPExcel_IOFactory::createReader('Excel2007');	// For excel 2007 	  
                }

                $filename =  $tempFile;
				
				$objReader->setReadDataOnly(true); 		
				$objPHPExcel=$objReader->load($filename);
		        $totalrows=$objPHPExcel->setActiveSheetIndex(0)->getHighestRow();   //Count Numbe of rows avalable in excel      	 
		        $objWorksheet=$objPHPExcel->setActiveSheetIndex(0); 
                $totalcolumn = $objPHPExcel->setActiveSheetIndex(0)->getHighestDataColumn();

                for($i=2;$i<=$totalrows;$i++)
		        { 
                    $dateinfo=htmlspecialchars(trim($objWorksheet->getCellByColumnAndRow(0,$i)->getValue()));          			         //Excel Column 8

                    if (strpos($dateinfo, '/') !== false) 
                    {
                        $dateinfo=str_replace(['/'], '-', $objWorksheet->getCellByColumnAndRow(0,$i)->getValue());  
                        $dateinfo = date("d-m-Y",strtotime($dateinfo));
                        
                    }
                    else
                    {
                            $dateinfo = $objWorksheet->getCellByColumnAndRow(0,$i)->getValue();
                            $dateinfo= ($dateinfo == "" ? NULL : date('d-m-Y', PHPExcel_Shared_Date::ExcelToPHP($dateinfo)) );

                            
                    }
                    $date[] = array(
                        "error" =>  0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(0,$i)->getColumn().$i,
                        "value" => $dateinfo,
                    );

                    $supplier[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(1,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(1,$i)->getValue() == "" ?
                                     "" :$objWorksheet->getCellByColumnAndRow(1,$i)->getValue()  ),
                    );

                    $medicine[] = array(
                        "error" => $this->isValidMedicine($objWorksheet->getCellByColumnAndRow(2,$i)->getValue()),
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(2,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(2,$i)->getValue() == "" ?
                                 "" :$objWorksheet->getCellByColumnAndRow(2,$i)->getValue()  ),
                    );

                    $batch[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(3,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(3,$i)->getValue() == "" ?
                                 "" :$objWorksheet->getCellByColumnAndRow(3,$i)->getValue()  ),
                    );

                    $expiryinfo=htmlspecialchars(trim($objWorksheet->getCellByColumnAndRow(4,$i)->getValue()));
                    if (strpos($expiryinfo, '/') !== false) 
                    {
                        $expiryinfo=str_replace(['/'], '-', $objWorksheet->getCellByColumnAndRow(4,$i)->getValue());  
                        $expiryinfo = date("d-m-Y",strtotime($expiryinfo));
                        
                    }
                    else
                    {
                            $expiryinfo = $objWorksheet->getCellByColumnAndRow(4,$i)->getValue();
                            $expiryinfo= ($expiryinfo == "" ? NULL : date('d-m-Y', PHPExcel_Shared_Date::ExcelToPHP($expiryinfo)) );

                            
                    }
                    
                    $expiry[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(4,$i)->getColumn().$i,
                        "value" => $expiryinfo,
                    );

                    $quantity[] = array(
                        "error" => 0,
                        "cell" =>  $objWorksheet->getCellByColumnAndRow(5,$i)->getColumn().$i,
                        "value" =>  ($objWorksheet->getCellByColumnAndRow(5,$i)->getValue() == "" ?
                                 "" :$objWorksheet->getCellByColumnAndRow(5,$i)->getValue()  ),
                    );

                }
                


                $json_response= [
                    
                    "date" => $date,
                    "supplier" => $supplier,
                    "medicine" => $medicine,
                    "batch" => $batch,
                    "expiry" => $expiry,
                    "quantity" => $quantity
                    
                ];
            
        }//end of file check
        
       
        header('Content-Type: application/json');
	echo json_encode( $json_response );
	exit;
        
      
    }


    /*
	@return type boolean
	@method isValidPreTrainingStatus(pretrainingstatus)
	@date  26.03.2018
*/
private function isValidMedicine($medicine)
{
   
     $medicine=strtoupper($medicine);

        if($medicine!="")
        {
            $where = array("medicine.medicine_name"=>trim($medicine));
            $isexist = $this->commondatamodel->checkExistanceData('medicine',$where);
            if($isexist>=1)
            {
                return 0;
            }
            else
            {
                return 1;
            }


        }
        else
        {
            return 0;
        }
            
    
   
}



public function insertIntoMedicine()
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
      
    
        $register = $this->fileimport->insertIntoMedicine($request,$hospital_id);
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



}//end of class