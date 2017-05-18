$(document).ready(function(){
function sendMail() {
 var link = "mailto:skondilya@gmail.com"
         //+ "?cc=myCCaddress@example.com"
            + "&subject=" + escape("I think I am in trouble")
            + "&body=" + escape("Hey! Reach me at this location.I think i need your help.")
           //+ escape(document.getElementById('myText').value)
    ;

   window.location.href = link;
 }

$(".policeimg").on("click", function() {
    console.log("Send Email Button called");
    // $.get("/api/email");
    sendMail({
         // from: 'shreyakondilya@outlook.com',
         // to: 'skondilya@gmail.com',
         // subject: 'MailComposer sendmail',
         // html: 'Mail of test sendmail '
         // }, function (err, reply) {
         // console.log(err && err.stack)
         // console.dir(reply)
    });
});

});
