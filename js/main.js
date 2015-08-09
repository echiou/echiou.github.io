window.onload = function(){
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
