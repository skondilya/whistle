
$(document).ready(function(){

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}



function getPosition(position) {
  var lat = position.coords.latitude ;
    console.log(lat);
  var long = position.coords.longitude;
    console.log(long);
    return {lat:lat,long:long}
}
getLocation()


function myMap() {
  var getcoordinates = getPostition(postition)
   var mapOptions = {
       center: new google.maps.LatLng(lat,long),
       zoom: 10,
       mapTypeId: google.maps.MapTypeId.HYBRID
}
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

}
myMap();


});
