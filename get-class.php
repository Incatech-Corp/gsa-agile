<?php 
$host="127.0.0.1";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="FoodRecall";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

$query = "SELECT report_date,  count(case classification when 'Class I' then 1 else null end) as 'Class I',  count(case classification when 'Class II' then 1 else null end) as 'Class II', count(case classification when 'Class III' then 1 else null end) as 'Class III'  FROM `RecallReportItems` group by report_date order by report_date";


if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($report_date, $classification, $classification1, $classification2);
	$result = array();
    while ($stmt->fetch()) {
  		array_push($result, array('report'=>$report_date, 'ClassI' => $classification,'ClassII' => $classification1,'ClassIII'=>$classification2));
	
    }
	
	echo json_encode($result);
	
    $stmt->close();
}

$con->close();
 
 
?>