$(document).ready(function(){
	// Function for count down timer, ends game once time runs out
	var intervalId = 0;
	var time =0;
	var stopwatch = {
		startTimer : function(duration, display) {
			var timer = duration, minutes, seconds;
			intervalId = setInterval(function () {
		  	minutes = parseInt(timer / 60, 10);
		  	seconds = parseInt(timer % 60, 10);

		  	minutes = minutes < 10 ? "0" + minutes : minutes;
		  	seconds = seconds < 10 ? "0" + seconds : seconds;

		  	display.text(minutes + ":" + seconds);
		  	
		  	if (--timer < 0) {
				clearInterval(intervalId);
				sendMail();
				$("#resultsModal").modal();
				$("#time").empty();
		  	}
  			}, 1000);
		},

		reset: function(){
		$("#time").empty();
		clearInterval(intervalId);   
		}

	}

$("#start").on("click", function() {
	  event.preventDefault();
	  var hour = $("#hours").val().trim();
	  var min = $("#mintues").val().trim();
	  var timeEntered = ((hour*60*60)+ (min*60));
	  time= timeEntered;
	  display = $("#time")
	  stopwatch.startTimer(time, display);
});

$("#stop").click(function () {
   	stopwatch.reset();
});

getLocation();
	
});


