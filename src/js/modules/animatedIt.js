 ;(function( window, document, undefined ) {	
	'use strict';

	// Animated It 

	function animatedIt() {

		// Function Show Fade
		function showFade( el ) {			
			el.hide(); 
			el.fadeIn(); 
		}

		// Globals
		return {
			showFade: showFade
		};		

	}

	// Globals
	window.iceberg = window.iceberg || {};
  	window.iceberg.animatedIt = animatedIt();  	

})( window, document ); 