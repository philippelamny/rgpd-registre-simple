<?php

require_once __DIR__ . '/vendor/autoload.php';


$managerAction = \TrTool\ParseUrlReST\Src\Classes\Parser::getClassManager("POST", "", $_POST, null, \TrTool\ParseUrlReST\Src\classesManagerTest\TestParserConfig::class, '\\MyManagerAction\\');

$managerAction->deal();

?>