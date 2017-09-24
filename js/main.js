window.onload = function(){
  // Check to see if the window is top on load
  // If not, then display button
  if ($(this).scrollTop() > 100) {
    $(".scrollToTop").css("opacity", "1");
  }
  // Check to see if the window is top on scroll
  // If not, then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").css("opacity", "1");
    } else {
      $(".scrollToTop").css("opacity", "0");
    }
  });

  // Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });

  // Index page image fading
  $( "#index-photos" ).mouseenter(function() {
    $( "#index-pic" ).css("background-image", "url\(\"/images/play.jpg\"\)");
  });

  $( "#index-mindtribe" ).mouseenter(function() {
    $( "#index-pic" ).css("background-image", "url\(\"/images/mindtribe.jpg\"\)");
  });

  $( "#index-hci" ).mouseenter(function() {
    $( "#index-pic" ).css("background-image", "url\(\"/images/hci.jpg\"\)");
  });
}
