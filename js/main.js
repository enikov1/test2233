$(document).ready(function () {

	function NumberScroll(elem) {
		elem.prop('Counter',0).animate({
			Counter: elem.text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				elem.text(Math.ceil(now));
			}
		});
	}

	//Mob menu close 
  $('.mobile-mnu .mob-line .mnu-btn').click(function(){
    $(this).toggleClass('hide');
    $('.mobile-mnu .sidebar').toggleClass('active');
  });
  $(".mobile-mnu li a").click(function() {
     $(".mob-btn").trigger("click");
  });


  if ($(window).width() > '480'){
	  $('.animation1').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__zoomInUp',
     		offset: 100
	  });

	   $('.animation3').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__slideInUp',
     		offset: 100
	  });

	   $('.animation2').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__slideInLeft',
     		offset: 30
	  });

	  $('.animation4').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__bounceInDown',
     		offset: 0
	  });

	   $('.animation5').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__backInUp',
     		offset: 50
	  });

	  $('.animation6').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__fadeIn',
     		offset: 10
	  });

	  $('.animation7').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__lightSpeedInLeft',
     		offset: 10
	  });

	  $('.animation8').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__fadeInRight',
     		offset: 50
	  });

	  $('.animation9').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__zoomInLeft',
     		offset: 100
	  });

	  $('.animation10').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__flipInY',
     		offset: 50
	  });

	  $('.animation11').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__zoomInUp',
     		offset: 100
	  });

	  $('.animation12').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__bounceInUp',
     		offset: 100
	  });

	   $('.animation13').viewportChecker({
			classToAdd: 'a-visible animate__animated animate__zoomInRight',
     		offset: 100
	  });

	  $(".animNumber").viewportChecker({
		classToAdd: 'count',
		offset: 0,
		callbackFunction: function(e, active) {
			NumberScroll(e);
		}
	  });

	  $('.graph-row .line').viewportChecker({
		  classToAdd: 'animation_grapTop',
		  offset: 50,
	  });

	  $('.item-scale .line').viewportChecker({
		  classToAdd: 'animation_lineTop',
		  offset: 5,
	  });
  }
});