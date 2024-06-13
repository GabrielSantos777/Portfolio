(function($) {
    'use strict';
	
	jQuery(document).ready(function(){
		
		
		/* START MOBILE-MENU  */
			$('.main_menu').slicknav({
				prependTo:".mobile-nav",
			});
		/* START MOBILE-MENU  */
		
		/* START RIPPLES JS */		
			var $home = $('#home');
			$home.ripples({
				resolution: 512,
				dropRadius: 20,
				perturbance: 0.04,
			});
		/* END RIPPLES JS */
		
	});	
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		// Wow
			new WOW().init();
})(jQuery);