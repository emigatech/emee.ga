<?php

    /*
     *   HideMyData API Endpoint
     */
    
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(0);

    require_once realpath($_SERVER["DOCUMENT_ROOT"])."/vendor/autoload.php";

    $_ERROR = [];
    $_DATA = [];

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, POST");


    if(isset($_REQUEST['commit']) && !empty($_REQUEST['commit']) && $_REQUEST['commit'] == 'calculate')
    {
       /**
         *   Calculate
         *   format   normal|array
         *   action   encrypt|decrypt
         *   timer    => n number ; stamp second|minute|hour|day|week|month|year;
         *   pkey     string
         *   skey     string
         *   chiper   alogorithm
         *   text     string|array
         */require_once realpath($_SERVER["DOCUMENT_ROOT"])."/lib/calculate.php";        
    }
    else if(isset($_REQUEST['commit']) && !empty($_REQUEST['commit']) && $_REQUEST['commit'] == 'chipers')
    {
       /**
         *  Chipers
         */require_once realpath($_SERVER["DOCUMENT_ROOT"])."/lib/chipers.php";        
    }    
    else if(isset($_REQUEST['commit']) && !empty($_REQUEST['commit']) && $_REQUEST['commit'] == 'date')
    {
       /**
         *  Date
         */require_once realpath($_SERVER["DOCUMENT_ROOT"])."/lib/date.php";        
    } 
    else {
        array_push($_ERROR, 'Commit method is nulled');
    } 

    (empty($_ERROR)) ? $_STATUS = 200 : $_STATUS = 500;
    http_response_code($_STATUS);

    die(json_encode([

    	'API' => 'eminmuhammadi/HideMyData',
        'system'  => [
        	'status'=> $_STATUS,
        	'IP' => $_SERVER['HTTP_CF_CONNECTING_IP'],
        	'X-REQUEST' => $_SERVER['HTTP_CF_REQUEST_ID'],
        	'AGENT' => $_SERVER['HTTP_USER_AGENT'],
        	'RAY' => $_SERVER['HTTP_CF_RAY'],
        	'FORWARDED_FOR' => $_SERVER['HTTP_X_FORWARDED_FOR'],
        	'IP_COUNTRY' => $_SERVER['HTTP_CF_IPCOUNTRY'],
        	'SCHEME' => $_SERVER['REQUEST_SCHEME'],
        	'METHOD' => $_SERVER['REQUEST_METHOD']
        ],
        'error'   => $_ERROR,
        'request' => $_REQUEST,
    	'response'=> $_DATA

    ],JSON_PRETTY_PRINT));