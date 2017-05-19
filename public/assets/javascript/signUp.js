// $(document).ready(function(){

//         $(".submit-btn").on("click", function(event) {
//                 event.preventDefault();

//                 var newSignUp = {
//                 name: $("#name_user").val().trim(),
//                 password: $("#passwrd_user").val().trim(),
//                 };

//                 $.post("/add", newUser)

//                 .done(function(data) {


//                 });
//         });       

//         function validate() {
//         var un = document.myform.username.value;
//         var pw = document.myform.pword.value;
//         var valid = false;

//         var unArray = ["Philip", "George", "Sarah", "Michael"];  
//         var pwArray = ["Password1", "Password2", "Password3", "Password4"]; 

//         for (var i=0; i <unArray.length; i++) {
//         if ((un == unArray[i]) && (pw == pwArray[i])) {
//         valid = true;
//         break;
//         }
//         }

        if (valid) {
        alert ("Login was successful");
        window.location = "Books.html";
        return false;
        }
};