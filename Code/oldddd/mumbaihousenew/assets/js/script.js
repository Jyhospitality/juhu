 function resize() {
        $('.aslider').height($('.aslider').children('.aslide').height());
}
    $(window).resize(resize);
    $(window).load(resize);
	

jQuery(document).ready(function() {
	
	$("#repMenu").on('click' , function(){
		 $('.header_top .main_nav').fadeToggle();
	});
	$('#resMenuClose').on('click', function(){
		$('.header_top .main_nav').fadeOut();
	});
	
	
$('.open_form').click(function(){
		$('.quick_enquiry').css("right","0");
		$('.open_form').hide();
		$('.close_form').show();
		
		
		
	});
		
		$('.close_form').click(function(){
		$('.quick_enquiry').css("right","-260px");
		$('.close_form').hide();
		$('.open_form').show();
		
	});
	});


jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
 
    $(document).ready(function() {
  $('.acc_contr').hide(); 
$('.acc_trigr:first').addClass('active').next().show(); 
$('.acc_trigr').click(function(){
	if( $(this).next().is(':hidden') ) {
		$('.acc_trigr').removeClass('active').next().slideUp(); 
		$(this).toggleClass('active').next().slideDown(); 
	}
	return false; 
});
});

$(function(){

	
	
	$(window).scroll(function() {
	
	var $win = $(window);
	var winH = $win.height()

	if ($(this).scrollTop()>winH)
	{
		$('.header').addClass('fixed');
	}
	else{
		$('.header').removeClass('fixed');
	}

});
	
	});



$(document).ready(function() {
	
 var owl = $("#tabs2");

      owl.owlCarousel({

       itemsCustom : [
          [0, 3]
    
        ],
        navigation : true

      });
	  
	  var owl = $("#tabs3");

      owl.owlCarousel({

       itemsCustom : [
          [0, 1]
    
        ],
        navigation : true

      });
	  
	  var owl = $("#tabs4");

      owl.owlCarousel({

       itemsCustom : [
          [0, 1]
    
        ],
        navigation : true,
		autoPlay : false,
        stopOnHover : true

      });
	  var owl = $("#tabs5");

      owl.owlCarousel({
		  
		  
				items : 7, //10 items above 1000px browser width
			//	itemsDesktop : [1025,2], //5 items between 1000px and 901px
				itemsDesktopSmall : [1024,5], // betweem 900px and 601px
				itemsTablet: [600,2], //2 items between 600 and 0

      /*  itemsCustom : [
	   [700, 4],
	   	[900, 5],
          [1201, 7]
    
        ], */
        navigation : true,
		autoPlay : true,
        stopOnHover : true

      });
});



jQuery(document).ready(function($) {
  jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
  $('#slider-with-blocks-1').royalSlider({
    arrowsNav: true,
    arrowsNavAutoHide: false,
    fadeinLoadedSlide: true,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
	autoScaleSlider: true,
    imageAlignCenter:false,
    blockLoop: true,
    loop: true,
    numImagesToPreload: 6,
    transitionType: 'fade',
    keyboardNavEnabled: true,
    block: {
      delay: 400
    }
  });
  });

	 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    }; 
	
	