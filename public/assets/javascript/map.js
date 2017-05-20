
$(document).ready(function(){
    var lat="";
    var long = "";
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, errorfn);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    function getPosition(position) {
        lat = position.coords.latitude ;
        console.log(lat);
        long = position.coords.longitude;
        console.log(long);
        myMap(lat, long);
    };

    function errorfn()
    {
      console.log("Users location cant be traced");
    };

    function myMap(lat,long) {
      var mapCanvas = document.getElementById("map");
      var myCenter = new google.maps.LatLng(lat,long);
      var mapOptions = {center: myCenter, zoom: 17};
      var map = new google.maps.Map(mapCanvas,mapOptions);
      var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
      });
      marker.setMap(map);
    };

   // Function for count down timer, ends game once time runs out
    var timer = 5;
    var stopwatch = {
      startTimer : function() {
          intervalId = setInterval(function() {
                  display = $("#time")
                  display.text(timer);
                  function sendMail() {
                      $.get("/api/contacts", function(data){
                          if (data.length == 1) {
                            var link = "mailto:"+ data[0].EmergencyContact_email_one
                            + "?cc=" + data[0].EmergencyContact_email_two
                            + "&subject=" + escape("I think I am in trouble")
                            + "&body=" + escape("Hey! I need your help.Here is my present location  ")
                            + escape("https://www.google.com/maps/@"+lat+","+long+",17z");
                            window.location.href = link;
                          }
                      });                                                                       
                  }
                  if (--timer < 0) {
                    clearInterval(intervalId);
                    sendMail();
                  }
          }, 1000);
      },
      reset: function(){
                clearInterval(intervalId);   
            }
  }

    $("#stopMail").click(function () {
       stopwatch.reset();
    });

    getLocation();
    stopwatch.startTimer();
    $("#resultsModal").modal();

});