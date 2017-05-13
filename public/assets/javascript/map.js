

var lat ="";
var long ="";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getPosition(position) {
    lat =  position.coords.latitude ;
    console.log(lat);
    long =  position.coords.longitude;
    console.log(long);
}

    var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfbFj3x7Wjo4AnWFSJSWLLaArMrnEpZFw" +
     "&AIzaSyDfbFj3x7Wjo4AnWFSJSWLLaArMrnEpZFw";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(lat,long){
      function myMap() {
         var mapOptions = {
             center: new google.maps.LatLng(lat,long),
             zoom: 10,
             mapTypeId: google.maps.MapTypeId.HYBRID
         }
         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

});
