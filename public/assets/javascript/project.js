$(document).ready(function(){

function sendMail() {
 var link = "mailto:(document.getElementById('email').value)"
         //+ "?cc=myCCaddress@example.com"
            + "&subject=" + escape("I think I am in trouble")
            + "&body=" + escape("Hey! Reach me at this location.I think i need your help.")
            + escape(document.getElementById('myLocation').value)
    ;

   window.location.href = link;
 }

$(".alertimg").on("click", function() {
    console.log("Send Email Button called");
    sendMail({
    });
});

});
