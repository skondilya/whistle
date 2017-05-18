$(document).ready(function(){

    
    $(".submit-btn").on("click", function(event) {
      event.preventDefault();

      var newCharacter = {
        name: $("#name_input").val().trim(),
        your_name: $("#your_name").val().trim(),
        email: $("#mail_input").val().trim(),
      };

      $.post("/add", newCharacter)
      // console.log('posting')
      .done(function(data) {
        // console.log(data);
        // alert("Adding character...");
      });
    });
  

  });