// JavaScript Document
$(document).ready(function(){
    $('#menu-item-16, #menu-item-26, #menu-item-17, #menu-item-24, #menu-item-29, #menu-item-25, .video a, .jf-scrolltop-block, #ibc-top-bar ul.links ul.submenu').hover(function(){
	  $(this).children().animate({backgroundPosition:'0 -40px'},{duration:400}).css("color",'#ffffff');
	  $(this).children().next().slideDown(300);	
	}, function(){
	   	$(this).children().animate({backgroundPosition:'0 -0px'},{duration:400}).css("color",'#000000');
	  $(this).children().next().slideUp(300);
	});
	//Scroll Top
	$(window).scroll(function(){
		if($(this).scrollTop() != 0){
			$('#jf-scrolltop, .jf-scrolltop-block, #gantry-totop').fadeIn(500);
		}
		else{
			$('#jf-scrolltop, .jf-scrolltop-block, #gantry-totop').fadeOut(500);
		}
	});
	$('#jf-scrolltop').click(function(){
		$('html,body').animate({scrollTop:0},600);
	});
	// do a barrel roll do google
	$('#logo #barrelRoll').click(function(){
		$('body').addClass('roll');
		return false;
	});
});
//file upload
$(function(){
			   $("input:file").siblings("span").text(''); 
			   $("input:file").siblings("span").text($("input:file").val());
			   $("input:file").change(function(){
				   $(this).siblings("span").text(''); 
				   $(this).siblings("span").text($(this).val());  
				});
				$("input:file").hover(
				function(){
				   $(this).siblings("img").attr("src","images/camera-rom.png"); 
				   $(this).css("cursor","pointer");	
				},
				function(){
				   	$(this).siblings("img").attr("src","images/cam.png");
				}
				);   
		   });

jQuery(document).ready(function($){
	
	
	// ABERTURA TABS MENU PRINCIPAL
	$('nav > ul#main-menu > li').hover(
		function() {
			var that = this;
			
			/*** Abre a tab (menu) apÃ³s o tÃ©rmino da contagem para o tempo determinado ***/
			$(this).data('timer', setTimeout(function(){open(that)},200));
			
			function open(param) 
			{
				if ( param.id ) $(param).find('ul.sub-menu' ).fadeIn( 'fast' );
			}
		},
		function () {
		
			/*** Fecha tab e zera a contagem do tempo ***/
			var timer = $(this).data('timer');
			if (timer) $(this).data('timer', clearTimeout(timer));
			$(this).find('ul.sub-menu' ).fadeOut( 'fast' );
		}
	);
});
jQuery(function(){
	$("#slider-1").chopSlider({
		/* Slide Element */
		slide : ".slide1",
		activeSlideClass : "cs-activeSlide",
		/* Controlers */
		nextTrigger : "a.snext-1",
		prevTrigger : "a.sprev-1",
		hideTriggers : true,
		sliderPagination : ".sp-1",
		activePaginationClass : "cs-active-pagination",
		autoplay : true,
		autoplayDelay : 10000,
		/* For first slider we will use all Multi Transitions */
		t2D : csTransitions['multi']['random'],
		t3D : csTransitions['3DFlips']['random']	
	});
});

function openWindow (URL,width,height) // Janela Ao Vivo
{
	var left = 100, top = 100;
	window.open(URL,'janela', 'width='+width+', height='+height+', top='+top+', left='+left+', scrollbars=no, titlebar=no, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
}				               

/*------------------------jwplayer-------------------------------------*/
jwplayer("video").setup({
        flashplayer: "/jwplayer/player.swf",
        file: "tvadmc.flv",
        streamer: "rtmp:live.justin.tv:1935/app:live_3Qc1Jj71Ivx2k9JJd1BvaD1yrBbkyÇ",
        bufferlength: "2",
        image: "images/LOGO IGREJA.png",
        backcolor: "#222222",
        frontcolor: "#cccccc",
        controlbar: "over",
        height: "355",
        width: "630",
        logo:
		{
			file: 'images/LOGO IGREJA.png',
		    hide: 'false',
		    over: '1',
		     out: '1',
		 timeout: '60',
		position: 'top-right',
		  margin: '16'
		}
    });
	
	jQuery(document).ready(function($){
	
	
	// ABERTURA TABS MENU PRINCIPAL
	$('nav > ul#main-menu > li').hover(
		function() {
			var that = this;
			
			/*** Abre a tab (menu) apÃ³s o tÃ©rmino da contagem para o tempo determinado ***/
			$(this).data('timer', setTimeout(function(){open(that)},200));
			
			function open(param) 
			{
				if ( param.id ) $(param).find('ul.sub-menu' ).fadeIn( 'fast' );
			}
		},
		function () {
		
			/*** Fecha tab e zera a contagem do tempo ***/
			var timer = $(this).data('timer');
			if (timer) $(this).data('timer', clearTimeout(timer));
			$(this).find('ul.sub-menu' ).fadeOut( 'fast' );
		}
	);
	
	// APAGAR A LUZ (VIDEOS)
	$('#opcoes-video li.luz a').click(function() 
	{
		icon = '<span class="icon light"></span>';
		that = $(this);
		$("#blackout").fadeToggle(500, "linear", function() 
		{
			if ( $(this).is(':visible') ) $(that).html(icon+' Acender a luz');
			else $(this).html(icon+' Apagar a luz');
		});
	});
	
});
  
$(document).ready(function(e) {
    $('#gallery a').lightBox();
});
/***************************************************************************************************************************/
/***************************************************************************************************************************/
/***************************************************************************************************************************/


