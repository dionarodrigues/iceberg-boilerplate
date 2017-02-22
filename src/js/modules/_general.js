 ;(function( window, document, undefined ) {	
	'use strict';

	// General Functions

	function general() {

		// Function forEach with callback
		function forEach( list, callback ) {
			for( var n = 0, count = list.length; n < count; n++ ) {
				callback.call( list[n], n ); 
			}
		}

		// Globals
		return {
			forEach: forEach
		};

	}

	// Globals
	window.iceberg = window.iceberg || {};
  	window.iceberg.general = general();  	

})( window, document );