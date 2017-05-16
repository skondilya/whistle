
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

getLocation();

 //  $(".alertimg").on("click", function(event) {
      
 // $("#resultsModal").modal();

 //      });



});
