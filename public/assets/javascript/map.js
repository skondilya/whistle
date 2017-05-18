
$(document).ready(function(){

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition, errorfn);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getPosition(position) {
    var lat = position.coords.latitude ;
    console.log(lat);
    var long = position.coords.longitude;
    console.log(long);
    myMap(lat, long);
}

function errorfn()
{
  console.log("Users location cant be traced");
}

function myMap(lat,long) {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(lat,long); 
  var mapOptions = {center: myCenter, zoom: 800};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

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
         from: 'shreyakondilya@outlook.com',
         to: 'skondilya@gmail.com',
         subject: 'MailComposer sendmail',
         html: 'Mail of test sendmail '
         }, function (err, reply) {
         console.log(err && err.stack)
         console.dir(reply)
    })
});


getLocation();
$("#resultsModal").modal();

});
