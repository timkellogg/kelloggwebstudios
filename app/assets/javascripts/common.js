var ready = function() {

	//Timeouts 
	setTimeout(function() {
		$('#fade-left').fadeIn();
	}, 2000 );
	
	setTimeout(function() {
		$('#fade-center').fadeIn();
	}, 3000 );

	setTimeout(function() {
		$('#fade-right').fadeIn();	
	}, 4000 );

	setTimeout(function() {
		$('#fade-left').fadeOut();
		$('#fade-center').fadeOut();
		$('#fade-right').fadeOut();
		$('#about').css('visibility', 'visible');
		$('#me').css('visibility', 'visible');
	}, 8000 );


	//Popover
	$("#hermosa-site").popover({ trigger: "hover focus" });
	$("#roadtripit-site").popover({ trigger: "hover focus" });

	//Progressbars
    $("#progressbar-1").progressbar({
      value: 33
    });

    $("#progressbar-2").progressbar({
    	value: 67
    });

    $("#progressbar-3").progressbar({
    	value: 100
    });


}


$(document).ready(ready);
$(document).on('page:load', ready);
