
$(document).ready(function(){
    

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

    //setting up the global variable
    mapCallback = myMap;
    getLocation();
    stopwatch.startTimer();
    $("#resultsModal").modal();

});