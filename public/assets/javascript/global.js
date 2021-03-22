    var lat="";
    var long = "";
    var mapCallback = function(lat, long){}; //default callback for google map api
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, errorfn);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    function getPosition(position) {
        lat = position.coords.latitude ;
        console.log("My latitiude is: " + lat);
        long = position.coords.longitude;
        console.log("My longitude is: " + long);
        mapCallback(lat, long);
    };

    function errorfn()
    {
      console.log("Users location cant be traced");
    };

    function sendMail() {
      $.get("/api/contacts", function(data){
          if (data.length == 1) {
            var link = "mailto:"+ data[0].EmergencyContact_email_one
            + "?cc=" + data[0].EmergencyContact_email_two
            + "&subject=" + escape("I think I am in trouble")
            + "&body=" + escape("Hey! I need your help. Here is my present location  ")
            + escape("https://www.google.com/maps/@"+lat+","+long+",17z");
            window.location.href = link;
          }
      });                                                                       
    }