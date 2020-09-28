<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


require_once __DIR__ . '/vendor/autoload.php';

//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);

if (empty($decoded)) return 'no data';
/*
$managerAction = \TrTool\ParseUrlReST\Src\Classes\Parser::getClassManager("POST", "", $decoded, null, \TrTool\ParseUrlReST\Src\classesManagerTest\TestParserConfig::class, '\\MyManagerAction\\');

$managerAction->deal();
*/

$action = new \MyManagerAction\RapportExcel($decoded);

$action->deal();
?>