window.onload = function(){
  // Check to see if the window is top on load
  // If not, then display button
  if ($(this).scrollTop() > 100) {
    $(".scroll-to-top").css("opacity", "1");
    $(".scroll-to-top").css("pointer-events", "auto");
  }
  // Check to see if the window is top on scroll
  // If not, then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").css("opacity", "1");
      $(".scroll-to-top").css("pointer-events", "auto");
    } else {
      $(".scroll-to-top").css("opacity", "0");
      $(".scroll-to-top").css("pointer-events", "none");
    }
  });

  // Click event to scroll to top
  $('.scroll-to-top').click(function(){
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
