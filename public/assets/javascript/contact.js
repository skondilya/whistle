$(document).ready(function(){

    
    $(".submit-btn").on("click", function(event) {
      event.preventDefault();

      var newContact = {
        name: $("#name_input").val().trim(),
        your_name: $("#your_name").val().trim(),
        email: $("#mail_input").val().trim(),
      };

      $.post("/add", newContact)
      
      .done(function(data) {


      });
    });
  

  });