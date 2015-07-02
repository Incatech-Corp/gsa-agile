<?php 
$host="127.0.0.1";
$port=3306;
$user="root";
$password="";
$dbname="FoodRecall";

$con = new mysqli($host, $user, $password, $dbname, $port)
	or die ('Could not connect to the database server' . mysqli_connect_error());



$query = "SELECT classification, product_description, reason_for_recall, distribution_pattern, status  FROM `RecallReportItems` WHERE report_date='" . $_GET["date"] . "'";


if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($classification, $product_description, $reason_for_recall, $distribution_pattern, $status);
	$result = array();
    while ($stmt->fetch()) {
       array_push($result, 'Report:',  array('Class:' =>$classification, 'Description:' =>$product_description,  'Reason:' =>$reason_for_recall,  'States:' =>$distribution_pattern,  'Status:' =>$status));
    }
    $stmt->close();
	
	echo json_encode($result);
}


?>
