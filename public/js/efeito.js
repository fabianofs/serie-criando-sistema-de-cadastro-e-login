(function($){
	//criar um array contendo todas as imagens que devem ser carregadas

	var fotos = [
		'fotos/*.*', 
		
	];

	$(document).ready(function(){

		//definir algumas variaveis
		var pagina = 0,
			carregada = 0,
			porpagina = 10,
			principal = $('#principal'),
			esperado = porpagina,
			carregarMais = $('#carregarMais');

		//evento customizado "image-loaded" para quando a imagem for carregada
		principal.on('image-loaded', function(){
			//quando este evento ocorrer, incremento a barra de progresso.
			carregada++;

			//NProgres.set recebe um numero de 0 a 1
			NProgress.set(carregada/esperado);

			if(pagina*porpagina >= fotos.length){

				//se não existirem mais imagens para serem carregadas
				//removemos o botão carregar mais.
				carregarMais.remove();
			}
		});

		//Quando o botão 'carregar mais' for clicado, exibimos mais 10 imagnes
		//controlada pela variavel 'porpagina'


		carregarMais.click(function(e){

			e.preventDefault();

			carregada = 0;
			esperado = 0;

			//vamos passar o $.Deferred() com status 'resolved' para a primeira imagem
			//dessa forma a primeira imagem é exibida imediatamente
			var deferred = $.Deferred().resolve();

			//recuperar uma parte do array que contem as imagens e exibir as imagens dessa parte.
			// a depender do tamanho do array, podem haver menos que a quantidade de imagem definida
			// por pagina

			$.each(fotos.slice(pagina*porpagina, pagina*porpagina+porpagina), function(){

				// passar o retorno "deferred" para cada chamada da função "showImage" para a proxima imagem.
				// isso fará com que uma imagem seja carregada após a outra
				deferred = principal.showImage(this, deferred);
				esperado++;
			});

			//iniciar a animação da barra de progresso
			NProgress.start();
			pagina++;
		});

		carregarMais.click();
	});

	//criamos um novo plugin jQuery, que mostra a imagem decorrente no elemento após
	//esta ser previamente carregada. O plugin requer dois parametros
	// src = url da imagem
	// deferred = objeto deferred do jQuery, criado pela previa chamada da função showImage
	//retornar um novo objeto defereed que é resolvido após a imagem ser carregada

	$.fn.showImage = function(src, deferred){
		var elem = $(this);

		//o objeto deferred que esta função retornará
		var result = $.Deferred();

		//criamos a div "foto" na qual a imagem será inserida
		var div = $('<div class="foto" />').appendTo(elem);

		//carregao a imagem na memoria
		var img = $('<img>');

		img.load(function(){
			//A foto foi carregada, usamos o metodo .always() do deferred
			//para ser notificado quando a imagem previa for carregada. Quando isso acontecer
			//mostre a atual
			deferred.always(function(){

				//aciona o efento customizado 'image-loaded' na div 'principal'
				elem.trigger('image-loaded');

				//apresentar a imagem ao fim das demais e exibir a mesma com uma animação
				img.hide().appendTo(div).delay(100).fadeIn('fast', function(){
					// resolver o deferre, que fará com que
					// a próxima imagem na pagina acione seu metodo callback always
					result.resolve();
				});
			});
		});

		img.attr('src', src);

		// nesse ponto o deferred ainda não foi resolvido
		return result;
	}
})(jQuery);