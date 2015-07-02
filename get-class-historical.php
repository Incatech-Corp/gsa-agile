<?php 
$host="127.0.0.1";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="FoodRecall";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

$query = "SELECT *  FROM `statehistorical`";


if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($state, $classification, $classification1, $classification2);
	$result = array();
    while ($stmt->fetch()) {
  		array_push($result, array('state'=>$state, 'ClassI' => $classification,'ClassII' => $classification1,'ClassIII'=>$classification2));
	
    }
	
	echo json_encode($result);
	
    $stmt->close();
}

$con->close();
 
 
?>