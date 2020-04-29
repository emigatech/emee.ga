<?php

    /*
     *   HideMyData API Endpoint
     */
    header("Content-Type: application/json; charset=utf-8");

    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(0);

    $_ERROR = [];
    $_DATA  = null;

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
         */require_once realpath($_SERVER["DOCUMENT_ROOT"])."/api/v1/lib/calculate.php";
    }
    else if(isset($_REQUEST['commit']) && !empty($_REQUEST['commit']) && $_REQUEST['commit'] == 'chipers')
    {
       /**
         *  Chipers
         */require_once realpath($_SERVER["DOCUMENT_ROOT"])."/api/v1/lib/chipers.php";
    }
    else if(isset($_REQUEST['commit']) && !empty($_REQUEST['commit']) && $_REQUEST['commit'] == 'date')
    {
       /**
         *  Date
         */require_once realpath($_SERVER["DOCUMENT_ROOT"])."/api/v1/lib/date.php";
    }
    else {
        array_push($_ERROR, 'Commit method is nulled');
    }

    (empty($_ERROR)) ? $_STATUS = 200 : $_STATUS = 500;
    http_response_code($_STATUS);

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");

    if(($_DATA === false) || empty($_DATA)) { $_DATA = "";}

    print(json_encode([

    	'API' => 'eminmuhammadi/HideMyData',
        'system'  => [
        	'status '=> $_STATUS,
        	'AGENT'  => $_SERVER['HTTP_USER_AGENT'],
        	'SCHEME' => $_SERVER['REQUEST_SCHEME'],
        	'METHOD' => $_SERVER['REQUEST_METHOD']
        ],
        'error'   => $_ERROR,
        'request' => $_REQUEST,
    	  'response'=> $_DATA

    ], TRUE , JSON_PRETTY_PRINT));
