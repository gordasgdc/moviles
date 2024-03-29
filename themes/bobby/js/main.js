( function($) {
  'use strict';



	/*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){
        $('body').addClass('loaded');	
		$('.loader').fadeOut(200);
	});


	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	$(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      horizontalOffset: 0,
      verticalOffset: 0,
    });



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	var navbar=$('.navbar');
	var navbarAffixHeight=56


	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar.addClass('affix');
	});

	$('.navbar-collapse').on('hidden.bs.collapse', function () {
		if (navbar.hasClass('affix-top')){
			navbar.removeClass('affix');
		}
			
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Affix
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	  	top:1
	  }
	});

	navbar.on('affixed-top.bs.affix', function() {
		if ($('.navbar-collapse').hasClass('in')){
			navbar.addClass('affix');
		}	
	});

	


	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/




    $('.js-scroller').on('click', function(e) {
    	e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbarAffixHeight + 1)
            }, 1000);
        }
    });




	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({
		offset:  navbarAffixHeight + 1
	});
	


	/* ---------------------------------------------- /*
	 * Showcase
	/* ---------------------------------------------- */



	$('.js-isotope').imagesLoaded(function() {
		$('.js-isotope').isotope({
			layoutMode: 'masonry',
			itemSelector: '.js-isotope-item',
		});
	});



	/* ---------------------------------------------- /*
	   Showcase Filter
	/* ---------------------------------------------- */



	$('.filter a').on('click', function(e) {
        e.preventDefault();
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
	});



	/* ---------------------------------------------- /*
	   Magnific Popup
	/* ---------------------------------------------- */



	$('.js-isotope').magnificPopup({
		  delegate: 'a',
		  mainClass: 'mfp-with-zoom',
	      type: 'image',
	      removalDelay: 0,
	      tLoading: 'Loading image #%curr%...',
	      fixedContentPos: true,
	      gallery: {
	        enabled: true,
	        navigateByImgClick: true
	      },
	      image: {
	        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	        titleSrc: function(item) {
	          return item.el.attr('title') + '<small></small>';
	        }
	      }
	});

	$('.js-play').magnificPopup({
        type: 'iframe'
    });



	/*-------------------------------------------------------------------------------
	  Carousel
	-------------------------------------------------------------------------------*/



 	$(".review-carousel").owlCarousel({
     
       itemsCustom : [
         [0, 1]
       ],
       responsiveRefreshRate:0,
       autoHeight : true,
       navigation : false

  	});



  	/*-------------------------------------------------------------------------------
	  Google map
	-------------------------------------------------------------------------------*/



  	/*(function(){
		var map;
		map = new GMaps({
			el: '.js-gmap',
			lat: 40.769510,
			lng:-74.356073,
			scrollwheel:false,
			zoom: 14,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});


		var image = 'images/map-marker.png';

		map.addMarker({
			lat: 40.769510,
			lng:-74.356073,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			infoWindow:{
				content: '<div class="map-info">601 Pompton Ave<br> Cedar Grove, NJ 07009</div>'
			}
		});
		  
		var styles = [ 

			{
			  "featureType": "road",
			  "stylers": [
				{ "color": "#422B53" }
			  ]
			  	},{
			  "featureType": "landscape",
			  "stylers": [
				{ "color": "#2D1C3A" }
			  ]
				},{
			  "featureType": "water",
			  "stylers": [
				{ "color": "#78588C" }
			  ]
			  },{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{ "color": "#808080" }
			  ]
			  },{
			  "featureType": "poi",
			  "stylers": [
				{ "color": "#1D1026" }
			  ]
			  },{
			  "elementType": "labels.text",
			  "stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#cccccc" }
			  ]
			}
	  
		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});

		map.setStyle("map_style");
		$(window).resize(function(){
			google.maps.event.trigger(map, "resize");
		});
	}()); */


  	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			                $('.modal').modal('hide');
		                	$('#success').modal('show');
		                },

		                error: function(){
			            	$('.modal').modal('hide');
			                $('#error').modal('show');
			            }
			        });
			    }
			});
		});
	}

})(jQuery);
