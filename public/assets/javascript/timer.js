$(document).ready(function(){
	function startTimer(duration, display) {
	    var timer = duration, minutes, seconds;
	    setInterval(function () {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.textContent = minutes + ":" + seconds;

	        if (--timer < 0) {
	            timer = duration;
	        }
	    }, 1000);
	}
	var time = [];
    $("#start").on("click", function() {
      event.preventDefault();
      var hour = $("#hours").val().trim();
      var min = $("#mintues").val().trim();
      console.log(hour);
      console.log(min);
      var timeEntered = ((hour*60*60)+ (min*60));
      time.push(timeEntered);
    });
    display = document.querySelector('#time');
    startTimer(time, display);
});

// function send() {
//   setTimeout(function() {
//     window.open("mailto:" + document.getElementById('email').value + "?subject=" + document.getElementById('subject').value + "&body=" + document.getElementById('message').value);
//   }, 320);
// }
