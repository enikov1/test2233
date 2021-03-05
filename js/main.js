$(document).ready(function () {

	//Mob menu close 
  $('.mobile-mnu .mob-line .mnu-btn').click(function(){
    $(this).toggleClass('hide');
    $('.mobile-mnu .sidebar').toggleClass('active');
  });
  $(".mobile-mnu li a").click(function() {
     $(".mob-btn").trigger("click");
  });
});