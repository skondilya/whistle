$(document).ready(function(){

//$(.myLocation).text("https://www.google.com/maps/@"+lat+","+long+",17z");
//https://www.google.com/maps/@42.0573897,-87.6724646,17z

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
