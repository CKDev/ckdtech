/*
=========================================================================================
 CKD Scripts
=========================================================================================
*/
// ----------------------------------------------------
// Scroll to Reveal
// https://scrollrevealjs.org/
// https://github.com/jlmakes/scrollreveal
ScrollReveal.debug = true;
ScrollReveal({
	delay: 750,
	duration: 1250,
	distance: '0px',
	easing: 'ease-in-out', // 'cubic-bezier(0.6, 0.2, 0.1, 1)', 'ease', 'ease-in-out', 'linear', etc...
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0, y: 0, z: 0
	},
	scale: 1,
	cleanup: false,
	// container: window.document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',		// 'always' — delay for all reveal animations
							// 'once'   — delay only the first time reveals occur
							// 'onload' - delay only for animations triggered by first load
	viewFactor: 0.0,
	viewOffset: {
		top: 0, right: 0, bottom: 0, left: 0
	},
	afterReset: function (el) {},
	afterReveal: function (el) {},
	beforeReset: function (el) {},
	beforeReveal: function (el) {}
});
var reveal_slide_intro = {
	delay: 0,
	duration: 500,
	distance: '40px',
	interval: 50,
	useDelay: 'once',
	afterReset: function (el) {},
	afterReveal: function (el) {},
	beforeReset: function (el) {},
	beforeReveal: function (el) {}
};
var reveal_slide_steps = {
	delay: 700,
	duration: 350,
	distance: '40px',
	useDelay: 'always',
	viewFactor: .5,
	afterReset: function (el) {},
	afterReveal: function (el) {
		var component = $(el).find('.component');
		$(component).click();
	},
	beforeReset: function (el) {},
	beforeReveal: function (el) {}
};
var reveal_slide_mobile = {
	delay: 700,
	duration: 350,
	distance: '40px',
	useDelay: 'always',
	viewFactor: 0,
	afterReset: function (el) {},
	afterReveal: function (el) {
		var component = $(el).find('.component');
		$(component).click();
	},
	beforeReset: function (el) {},
	beforeReveal: function (el) {}
};


/*
=========================================================================================
*/
$('document').ready( function() {
	
//	$("html, body").animate({ scrollTop: 0 }, 0);

	var click = ( 'ontouchstart' in window ) ? 'touchstart' : 'click';
	var $window = $(window),
		$window_breakpoint_md = 800, // <- Global Breakpoint for tablet
		$window_breakpoint_sm = 600; // <- Global Breakpoint for mobile (double check with scss-variables)

	// ----------------------------------------------------
	var checkWidth = function() {
	    $window_width = $window.width();
	    return $window_width;
	}
	if( checkWidth() < $window_breakpoint_md) {
		if( checkWidth() < $window_breakpoint_sm) {
			$('body').addClass('screen-mobile');
		}
		else if( checkWidth() < $window_breakpoint_md) {
			$('body').addClass('screen-tablet');
		}
	}

	// ----------------------------------------------------
	// ScrollReveal
	$sr_wrapper = $('#main-section').not('.welcome, .content-contact');
	$sr_context = $sr_wrapper.find('.flex-wrap').first();
	$sr_height = $sr_context.height() + "px";
	
	$sr_wrapper.css({ visibility: 'visible' });
	$sr_wrapper.css({ height: $sr_height });
	
	// Philosophy and Process pages
	if( checkWidth() > 600) {
		$sr_context.css({ height: '0px'});
		$sr_context.animate({
			height: $sr_height
		}, 1500, function() {
			ScrollReveal().reveal('.js-reveal',  reveal_slide_intro);
			ScrollReveal().reveal('.js-reveal-step',  reveal_slide_steps);
		});
	} else {
		ScrollReveal().reveal('.js-reveal',  reveal_slide_intro);
		ScrollReveal().reveal('.js-reveal-mobile',  reveal_slide_mobile);
	}
	
	// Home page
	ScrollReveal().reveal('.js-reveal-welcome',  reveal_slide_intro);


	// ----------------------------------------------------
	// Read More Toggle
	$('.more-toggle').click( function(e) {
		e.preventDefault();
		$context = $(this).parents('p');
		// $context.toggleClass('show-more');
		$context.toggleClass('show-less');
	});
	var resize_more_text = function () {
		$('.more').each( function(i) {

		//	$(this).click( function(e) {
				$context = $(this).parents('p');
				$context.css({ height: 'auto'});

				$height = $context.height() + "px";
				$context.css({ height: $height});
			});
		//});
	};
	resize_more_text();
	// window.resize event listener / debouncer
	window.addEventListener('resize', debounce( function() {
	//	console.info('Hey! It is', new Date().toUTCString());
		resize_more_text();
	}, 200));


	// ----------------------------------------------------
	$('#nav-toggle-checkbox').change(
		function() {
			var show = $( "#nav-toggle-checkbox:checked" ).length;
  			if( show >= 1 ) { 
  				$('body').addClass('mobile-menu-open');
  				drawer_mobile();
  			} else {
  				$('body').removeClass('mobile-menu-open');
  				drawer_mobile_restore();
  			}
		}
	);
	// function drawer_toggle( ) { // <- Global Toggle. Uses 'drawer_mobile()' and 'drawer_mobile_restore()', marked below.
	// 	if( !$('body').hasClass('mobile-menu-open') ) {
	// 		$('body').addClass('mobile-menu-open');
	// 		drawer_mobile();
	// 	}
	// 	else if( $('body').hasClass('mobile-menu-open') ) {
	// 		$('body').removeClass('mobile-menu-open');
	// 		drawer_mobile_restore();
	// 	}
	// }
	function drawer_mobile( ) { // <- Check window width, and adjust CSS if width matches our small screen breakpoint
		var mobile_offset  = 80;
		var mobile_restore = 200;
		if( checkWidth() < $window_breakpoint_sm) {
			var $drawer_width = Math.round(checkWidth() - mobile_offset);
			$('#nav-drawer').addClass('mobile').css({width: $drawer_width+'px', left:'0px'});
		//	$('#nav-content').addClass('mobile').css({left: $drawer_width+'px'});
		}
	}
	function drawer_mobile_restore( ) { // <- Check for "mobile" classes, and restore the CSS for the drawer and main content
		var mobile_offset  = 60;
		var mobile_restore = 200;
		if( checkWidth() < $window_breakpoint_sm) {
			var $drawer_width = Math.round(checkWidth() - mobile_offset);
			$('#nav-drawer').css({left: '-'+$drawer_width+'px'}).addClass('mobile');
		//	$('#nav-content').css({left: '0px'}).addClass('mobile');
		}
	}
	$('#drawer-toggle, #drawer-close, #content-mask').bind( 'click', function(e) {
		$('#nav-toggle-checkbox').click();
	});

});