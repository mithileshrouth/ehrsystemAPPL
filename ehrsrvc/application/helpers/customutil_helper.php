<?php
	if(!function_exists('stringToArray'))
	{
		function stringToArray($string)
		{	
		   $datas = explode(",",$string);
		   return $datas; 
		}
	}
	if(!function_exists('arrayToStringWithComaa'))
	{
		$string = "";
		function arrayToStringWithComaa($arr)
		{	
		   $string = implode(",",$arr);
		   return $string; 
		}
	}
	
	if(!function_exists('geAge')){
		function geAge($dob)
		{	
		    $dateOfBirth = date('d-m-Y',strtotime($dob));
			$today = date("Y-m-d");
			$diff = date_diff(date_create($dateOfBirth), date_create($today));
			return $diff->format('%y');
		}
	}
	
?>
	


