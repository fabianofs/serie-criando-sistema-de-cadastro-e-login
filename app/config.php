<?php
	//Constantes
	$configs = new HXPHP\System\Configs\Config;

	//Globais
		$configs->global->models->directory = APP_PATH . 'models' . DS;

		$configs->global->views->directory = APP_PATH . 'views' . DS;
		$configs->global->views->extension = '.phtml';

		$configs->global->controllers->directory = APP_PATH . 'controllers' . DS;
		$configs->global->controllers->notFound = 'Error404Controller';

		$configs->title = 'ADMC';

	//Configurações de Ambiente - Produção
		$configs->env->add('production');

		$configs->env->production->baseURI = '/';

		$configs->env->production->database->setConnectionData(array(
			'driver' => 'mysql',
			'host' => 'eleganceparfume.com.br',
			'user' => 'castical',
			'password' => 'Fabiano1804',
			'dbname' => 'kleber',
			'charset' => 'utf8'
		));

		$configs->env->production->mail->setFrom(array(
			'from' => 'Remetente',
			'from_mail' => 'email@remetente.com.br'
		));

	$configs->env->production->auth->setURLs('/home/', '/login/');

	return $configs;
