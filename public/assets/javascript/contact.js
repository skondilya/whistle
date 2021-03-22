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
        resetForm();
        alert("Your contacts have been saved. Be safe with Whistle App");
      });
  });

    function resetForm(){
      $("#name_input").val("");
      $("#e1_input").val("");
      $("#e1mail_input").val("");
      $("#e2_input").val("");
      $("#e2mail_input").val("");
    }
});