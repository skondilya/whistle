$(document).ready(function(){

    
    $(".submit-btn").on("click", function(event) {
      event.preventDefault();

      var newContact = {
        your_name: $("#name_input").val().trim(),
        EmergencyContact_name_one: $("#e1_input").val().trim(),
        EmergencyContact_email_one: $("#e1mail_input").val().trim(),
        EmergencyContact_name_two: $("#e2_input").val().trim(),
        EmergencyContact_email_two: $("#e2mail_input").val().trim()
      };

      $.post("/api/register", newContact, function(data) {

        console.log("User information is Saved...");

      });

  });
  
});