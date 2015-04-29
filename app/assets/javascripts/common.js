var ready = function() {

	//Timeouts 
	setTimeout(function() {
		$('#sub-title-left').fadeIn();
	}, 2000 );
	
	setTimeout(function() {
		$('#sub-title-center').fadeIn();
	}, 3000 );

	setTimeout(function() {
		$('#sub-title-right').fadeIn();	
	}, 4000 );

	setTimeout(function() {
		$('#sub-title-left').fadeOut();
		$('#sub-title-center').fadeOut();
		$('#sub-title-right').fadeOut();
		$('#about').fadeIn();
	}, 6000 );


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
