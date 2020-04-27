<?php

if (count(get_included_files()) == 1) die("Direct access not permitted.");

require_once realpath($_SERVER["DOCUMENT_ROOT"])."/vendor/autoload.php";

if (isset($_REQUEST['data']) && !empty($_REQUEST['data']))
{

    /**
     *   format   normal|array
     *   action   encrypt|decrypt
     *   timer    => n number ; stamp second|minute|hour|day|week|month|year;
     *   pkey     string
     *   skey     string
     *   chiper   alogorithm
     *   text     string|array
     */

    /*
     *  Action
    */
    if ((isset($_REQUEST['data']['format']) && !empty($_REQUEST['data']['format'])) && (isset($_REQUEST['data']['action']) && !empty($_REQUEST['data']['action'])))
    {

        /*
         *  Check Text, Pkey , Skey
        */
        if ((isset($_REQUEST['data']['pkey']) && !empty($_REQUEST['data']['pkey'])) && (isset($_REQUEST['data']['skey']) && !empty($_REQUEST['data']['skey'])) && (isset($_REQUEST['data']['text']) && !empty($_REQUEST['data']['text'])) && (isset($_REQUEST['data']['chiper']) && !empty($_REQUEST['data']['chiper'])))
        {

            $_PKEY = $_REQUEST['data']['pkey'];
            $_SKEY = $_REQUEST['data']['skey'];
            $_TEXT = $_REQUEST['data']['text'];
            $_CHIPER = $_REQUEST['data']['chiper'];

            $_HIDEMYDATA = (new eminmuhammadi\HideMyData\HideMyData($_PKEY, $_SKEY, $_CHIPER));

            /*
             *   Normal
            */
            if ($_REQUEST['data']['action'] == 'decrypt')
            {

                if (isset($_REQUEST['data']['timer']))
                {

                    if ((isset($_REQUEST['data']['timer']['n']) && !empty($_REQUEST['data']['timer']['n'])) && (isset($_REQUEST['data']['timer']['n']) && !empty($_REQUEST['data']['timer']['stamp'])))
                    {

                        $_N = $_REQUEST['data']['timer']['n'];
                        $_STAMP = $_REQUEST['data']['timer']['stamp'];

                        if ($_REQUEST['data']['format'] == 'normal')
                        {

                            $_DATA = $_HIDEMYDATA->decrypt($_TEXT, "$_N $_STAMP");
                        }

                        else if ($_REQUEST['data']['format'] == 'array')
                        {

                            $_DATA = $_HIDEMYDATA->ArrayDecrypt($_TEXT, "$_N $_STAMP");
                        }

                        else
                        {

                            array_push($_ERROR, 'The format type is mismatched');
                        } // else=> format mismatch


                    }

                    else
                    {

                        array_push($_ERROR, 'The n or stamp of timer is nulled');
                    } // else => n or stamp is nulled

                }

                else
                {

                    if ($_REQUEST['data']['format'] == 'normal')
                    {

                        $_DATA = $_HIDEMYDATA->decrypt($_TEXT);
                    }

                    else if ($_REQUEST['data']['format'] == 'array')
                    {

                        $_DATA = $_HIDEMYDATA->ArrayDecrypt($_TEXT);
                    }

                    else
                    {

                        array_push($_ERROR, 'The format type is mismatched');
                    } // else=> format mismatch

                }

            }

            else if ($_REQUEST['data']['action'] == 'encrypt')
            {

                if (isset($_REQUEST['data']['timer']))
                {

                    if ((isset($_REQUEST['data']['timer']['n']) && !empty($_REQUEST['data']['timer']['n'])) && (isset($_REQUEST['data']['timer']['n']) && !empty($_REQUEST['data']['timer']['stamp'])))
                    {

                        $_N = $_REQUEST['data']['timer']['n'];
                        $_STAMP = $_REQUEST['data']['timer']['stamp'];

                        if ($_REQUEST['data']['format'] == 'normal')
                        {

                            $_DATA = $_HIDEMYDATA->encrypt($_TEXT, "$_N $_STAMP");
                        }

                        else if ($_REQUEST['data']['format'] == 'array')
                        {

                            $_DATA = $_HIDEMYDATA->ArrayEncrypt($_TEXT, "$_N $_STAMP");
                        }

                        else
                        {

                            array_push($_ERROR, 'The format type is mismatched');
                        } // else=> format mismatch

                    }

                    else
                    {

                        array_push($_ERROR, 'The n or stamp of timer is nulled');
                    } // else => n or stamp is nulled

                }

                else
                {

                    if ($_REQUEST['data']['format'] == 'normal')
                    {

                        $_DATA = $_HIDEMYDATA->encrypt($_TEXT);
                    }

                    else if ($_REQUEST['data']['format'] == 'array')
                    {

                        $_DATA = $_HIDEMYDATA->ArrayEncrypt($_TEXT);
                    }

                    else
                    {

                        array_push($_ERROR, 'The format type is mismatched');
                    } // else=> format mismatch

                }

            }

            else
            {

                array_push($_ERROR, 'The action type is mismatched');
            } // else=> action is mismatched

        }

        else
        {

            array_push($_ERROR, 'The skey, pkey, chiper or text is nulled');
        } // else=> action or format is nulled

    }

    else
    {

        array_push($_ERROR, 'The action or format is nulled ');
    } // else=> action format is nulled

}

else
{

    array_push($_ERROR, 'The request is nulled');
} // data is nulled
