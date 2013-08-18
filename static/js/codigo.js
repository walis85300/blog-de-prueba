$('#home').on('click', function(){

	$('#menuMoviles').css({

		"display" : "block",
		"-webkit-transition":"all 1s ease",
		"-moz-transition":"all 1s ease",
		"-o-transition":"all 1s ease",
		"transition":"all 1s ease"

	});

});

$('#cerrar figcaption').on('click',function(){

	$('#menuMoviles').css({
		"display" : "none"
	});

});




