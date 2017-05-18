$(document).ready(function(){
	// Function for count down timer, ends game once time runs out
	var stopwatch = {
		intervalId : null,
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
		  	}
  			}, 1000);
		},

		stop: function(){
		// Use clearInterval to stop the count.
		clearInterval(intervalId);
		}

	}

	var time = [];
    $("#start").on("click", function() {

      event.preventDefault();
      var hour = $("#hours").val().trim();
      var min = $("#mintues").val().trim();
      var timeEntered = ((hour*60*60)+ (min*60));
      time.push(timeEntered);

      	setTimeout(function(){
      	$("#resultsModal").modal();
		function sendMail() {
			var link = "mailto:skondilya@gmail.com"
	     	//+ "?cc=myCCaddress@example.com"
	        + "&subject=" + escape("I think I am in trouble")
	        + "&body=" + escape("Hey! Reach me at this location.I think i need your help.");
	       	//+ escape(document.getElementById('myText').value)
																												
			window.location.href = link;
		}

		sendMail();
		console.log("time up!")
	 },time*1000);
      	display = $("#time")
		stopwatch.startTimer(time, display);
    });

// function emptyDivs () {
//   $('#hours').empty();
//   $('#mintues').empty();
//   time=[];
// }

$("#stop").click(function () {
   stopwatch.stop();
});
	
});


// function send() {
//   setTimeout(function() {
//     window.open("mailto:" + document.getElementById('email').value + "?subject=" + document.getElementById('subject').value + "&body=" + document.getElementById('message').value);
//   }, 320);
// }
