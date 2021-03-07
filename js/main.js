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

	$("title").html('BTO Case | Viking Coders');
	$("body").addClass('case-page');
  	$(window).bind('scroll', function() {
  		if ($(window).scrollTop() > 150 && $(window).width() > 800) {
  			$('.case-page .case-navbar').removeClass('hidden');
  			$('.case-page .case-t1').addClass('navactive');
  		} else{
  			$('.case-page .case-navbar').addClass('hidden');
  			$('.case-page .case-t1').removeClass('navactive');
  		}
  	});

	  $('.case-page .case-navbar .navbtn').mouseover(function(){
  			$(this).addClass('active');
  			$('.case-page .case-navbar .navbtn').addClass('passive');
  			$(this).removeClass('passive');
  			if($(this).hasClass('prev')){
  				$('body').css('left', '25px');
  			} else{
  				$('body').css('left', '-25px');
  			}
   		});
   		$('.case-page .case-navbar .navbtn').mouseleave(function(){
  			$(this).removeClass('active');
  			$('.case-page .case-navbar .navbtn').removeClass('passive');
  			$('body').css('left', '0px');
   		});

	//Mob menu close 
  $('.mobile-mnu .mob-line .mnu-btn').click(function(){
    $(this).toggleClass('hide');
    $('.mobile-mnu .sidebar').toggleClass('active');
  });
  $(".mobile-mnu li a").click(function() {
     $(".mob-btn").trigger("click");
  });
//Full Page Menu
  $(".open-mnu").mouseover(function() {
    $(this).addClass('active');
    $(".main-block").addClass("menu-open");
    $("header").attr("id", "openned");
    $(".overlay").css("display", "block");
    $(".servises-mnu").css("display", "block"); 
    $(".servises-mnu .wrap h4").addClass("a-visible delay-3s animated fadeIn");
    $(".servises-mnu .wrap p").addClass("a-visible delay-10s animated fadeInDown");
  });
  $(".servises-mnu .close-btn").click(function() {
    $('.open-mnu.active').removeClass('active');
    $(".main-block").removeClass("menu-open");
    $("header").attr("id", "");
    $(".overlay").css("display", "none");
    $(".servises-mnu").css("display", "none"); 
  });


  //Effects
  $(".servises-mnu .one").hover(function() {
    $('#none').fadeOut(0);
    $('.servises-mnu #e-com').addClass("a-visible animated fadeIn delay-1s").css('display', 'block');
    },
    function(){
      $('#none').fadeIn(0);
    $('.servises-mnu #e-com').removeClass("a-visible animated fadeIn delay-1s").css('display', 'none');
  });
  $(".servises-mnu .two").hover(function() {
     $('#none').fadeOut(0);
    $('.servises-mnu #dev').addClass("a-visible animated fadeIn delay-1s").css('display', 'block');
    },
    function(){
      $('#none').fadeIn(0);
    $('.servises-mnu #dev').removeClass("a-visible animated fadeIn delay-1s").css('display', 'none');
  });
  $(".servises-mnu .three").hover(function() {
     $('#none').fadeOut(0);
    $('.servises-mnu #maintance').addClass("a-visible animated fadeIn delay-1s").css('display', 'block');
    },
    function(){
      $('#none').fadeIn(0);
    $('.servises-mnu #maintance').removeClass("a-visible animated fadeIn delay-1s").css('display', 'none');
  });
  $(".servises-mnu .four").hover(function() {
     $('#none').fadeOut(0);
    $('.servises-mnu #branding').addClass("a-visible animated fadeIn delay-1s").css('display', 'block');
    },
    function(){
      $('#none').fadeIn(0);
    $('.servises-mnu #branding').removeClass("a-visible animated fadeIn delay-1s").css('display', 'none');
  });
  $(".servises-mnu .five").hover(function() {
     $('#none').fadeOut(0);
    $('.servises-mnu #interg-marketing').addClass("a-visible animated fadeIn delay-1s").css('display', 'block');
    },
    function(){
      $('#none').fadeIn(0);
    $('.servises-mnu #interg-marketing').removeClass("a-visible animated fadeIn delay-1s").css('display', 'none');
  });
  $(".servises-mnu .six").hover(function() {
     $('#none').fadeOut(0);
    $('.servises-mnu #miva-dev').addClass("a-visible animated fadeIn delay-1s").css('display', 'block');
    },
    function(){
      $('#none').fadeIn(0);
    $('.servises-mnu #miva-dev').removeClass("a-visible animated fadeIn delay-1s").css('display', 'none');
  });
  $(".servises-mnu .wrap").hover(function() {
    $('.servises-mnu .wrap').css('color', '#949494');
      $(this).css('color', '#fff');
    },
    function(){
      $('#none').fadeIn(0);
      $('.servises-mnu .wrap').css('color', '#fff');
  });

  // Fixed header when scrolled
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 200) {
      $('header').addClass('header-scrolled a-visible delay-6s animated fadeInDown');
      $('.servises-mnu').css('position', 'fixed').css('margin-top', '84px').css('padding-top', '60px');
      $('.overlay').css('position', 'fixed').css('z-index', '50');
   }
    else {
      $('header').removeClass('header-scrolled a-visible delay-6s animated fadeInDown');
      $('.servises-mnu').css('position', 'absolute').css('margin-top', '').css('padding-top', '');
      $('.overlay').css('position', 'absolute').css('z-index', '');
   }
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