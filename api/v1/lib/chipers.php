<?php

if(count(get_included_files()) ==1) die("Direct access not permitted.");

$_DATA = openssl_get_cipher_methods();
