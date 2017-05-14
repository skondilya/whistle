// var h1 = document.getElementsByTagName('h1')[0],
//     start = document.getElementById('start'),
//     stop = document.getElementById('stop'),
//     clear = document.getElementById('clear'),
//     seconds = 0, minutes = 0, hours = 0,
//     t;

// function add() {
//     seconds++;
//     if (seconds >= 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes >= 60) {
//             minutes = 0;
//             hours++;
//         }
//     }
    
//     h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }
// timer();


// /* Start button */
// start.onclick = timer;

// /* Stop button */
// stop.onclick = function() {
//     clearTimeout(t);
// }

// /* Clear button */
// clear.onclick = function() {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }


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
