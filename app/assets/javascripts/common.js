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


}


$(document).ready(ready);
$(document).on('page:load', ready);
