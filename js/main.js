window.onload = function(){
  if ($(this).scrollTop() > 110) {
    $('.scrollToTop').fadeIn(500);
  }
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 110) {
      $('.scrollToTop').fadeIn(500);
    } else {
      $('.scrollToTop').fadeOut(500);
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });

  $( "#index-photos" )
  .mouseenter(function() {
    $( "#index-pic" ).css("background-image", "url\(\"/images/play.jpg\"\)");
  })
  .mouseleave(function() {
    // $( "#index-pic" ).css("background-image", "none");
  });

  $( "#index-mindtribe" )
  .mouseenter(function() {
    $( "#index-pic" ).css("background-image", "url\(\"/images/mindtribe.jpg\"\)");
  })
  .mouseleave(function() {
    // $( "#index-pic" ).css("background-image", "none");
  });

  $( "#index-hci" )
  .mouseenter(function() {
    $( "#index-pic" ).css("background-image", "url\(\"/images/hci.jpg\"\)");
  })
  .mouseleave(function() {
    // $( "#index-pic" ).css("background-image", "none");
  });

  $(function() {
      $("#contact-form").submit(function(e) {
        e.preventDefault();
        submitButton = document.getElementById("contact-submit");
        $.ajax({
          url: "//formspree.io/ethanchiou@berkeley.edu",
          method: "POST",
          data: $(this).serialize(),
          dataType: "json",
          beforeSend: function() {
            submitButton.innerHTML = '<span class=\"fa fa-spin fa-circle-o-notch\"></span>';
          },
          success: function(data){
            // Success message
            submitButton.innerHTML = '';
            $('#contact-overlay').fadeIn();

            setTimeout(function(){
              //clear all fields
              $('#contact-form').trigger("reset");
            }, 500);
          },
          error: function(){
            // Success message
            submitButton.innerHTML = 'Error. Please try again later.';

            setTimeout(function(){
              submitButton.innerHTML = 'Submit';
            }, 2000);
            //clear all fields
            $('#contact-form').trigger("reset");
          }
        });
      });
  });
}
