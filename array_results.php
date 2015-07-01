<?php 
$host="127.0.0.1";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="FoodRecall";

$param_state = urldecode($_GET["state"]);
$param_class = urldecode($_GET["class"]);
$param_description = urldecode($_GET["description"]);
$param_reason = urldecode($_GET["reason"]);
$where_clause = ' WHERE ';

if ($param_state <> '') {
   $where_clause .= "distribution_pattern LIKE BINARY '%" . $param_state . "%' ";
}

if ($param_class <> '') {
	if ($where_clause <> ' WHERE ')
	{
		$where_clause .= " and classification = '" . $param_class . "' ";
	}
	else
	{
		$where_clause .= "classification = '" . $param_class . "' ";		
	}
}

if ($param_description <> '') {
	if ($where_clause <> ' WHERE ')
	{
		$where_clause .= " and product_description LIKE '%" . $param_description . "%' ";
	}
	else
	{
		$where_clause .= "product_description LIKE '%" . $param_description . "%' ";		
	}
}

if ($param_reason <> '') {
	if ($where_clause <> ' WHERE ')
	{
		$where_clause .= " and reason_for_recall LIKE '%" . $param_reason . "%' ";
	}
	else
	{
		$where_clause .= "reason_for_recall LIKE '%" . $param_reason . "%' ";
	}
}

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

$query = "SELECT report_date, classification, product_description, reason_for_recall FROM `RecallReportItems`";

if ($where_clause <> ' WHERE ')
{
    $query .= $where_clause;
}

if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($report_date, $classification, $product_description, $reason_for_recall);
	$result = array();
    while ($stmt->fetch()) {
        array_push($result, array('report'=>$report_date, 'class' => $classification,'description' => $product_description,'reason'=>$reason_for_recall));
		
    }
	echo json_encode($result);
	//echo json_encode($result);

    $stmt->close();
}

$con->close();
?>
