jQuery(document).ready(function($){
	
	// APAGAR A LUZ (VIDEOS)
	$('#opcoes-video li.luz a').click(function() 
	{
		icon = '<span class="icon light"></span>';
		that = $(this);
		$("#blackout").fadeToggle(500, "linear", function() 
		{
			if ( $(this).is(':visible') ) $(that).html(icon+' Acender a luz');
			else $(that).html(icon+' Apagar a luz');
		});
	});
});