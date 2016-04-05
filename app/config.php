<?php
	//Constantes
	$configs = new HXPHP\System\Configs\Config;

	$configs->env->add('development');

	$configs->env->development->baseURI = '/sistema/';

	$configs->env->development->database->setConnectionData(array(
		'host' => 'localhost',
		'user' => 'root',
		'password' => '',
		'dbname' => 'sistemafs'
	));

	//$configs->env->development->setURLs();

	return $configs;
