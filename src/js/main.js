;(function( window, document, $, undefined ) {

	'use strict';

	/*
		Some patterns for JS:

		- Immediately-Invoked Function Expression (IIFE)
		http://benalman.com/news/2010/11/immediately-invoked-function-expression/

		- The Module Pattern
		https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

		- Revealing Module Pattern
		https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

		- Locaweb Style
		http://opensource.locaweb.com.br/locawebstyle/documentacao/praticas/javascript/

		- Browser Diet
		https://browserdiet.com/

	*/

	// DOM is ready
	$(function(){

		// Variables
		var $mainpage						= $('.main-page'),
			$btn							= $mainpage.find('.btn');


		// Animated It - Show Fade
		iceberg.animatedIt.showFade( $btn );

    });

})( window, document, jQuery );
