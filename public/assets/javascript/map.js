
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


function myMap(lat, long) {
  console.log("the latitude is " + lat);
  console.log("the longitude is " + long);
   var mapOptions = {
       center: new google.maps.LatLng(lat,long),
       zoom: 1000,
       mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

}
getLocation();

});
