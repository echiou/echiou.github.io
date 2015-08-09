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
            submitButton.innerHTML = 'Thank you!';

            //clear all fields
            $('#contactForm').trigger("reset");
          },
          error: function(){
            // Success message
            submitButton.innerHTML = 'Error. Please try again later.';

            //clear all fields
            $('#contactForm').trigger("reset");
          }
        });
      });
  });
}
