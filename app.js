console.log("js is working");



var go = document.querySelector('.go');
var stop = document.querySelector('.stop');

var timediv = document.querySelector('#timer');
//countdown timer
var timeclock = 30;
var t;
function timer() {
	t = setTimeout(function() {
		timeclock --;
		timediv.innerHTML = timeclock;
		timer();
	}, 1000); 
	timeZero();
	console.log(timediv);
}
function stopTime() {
	clearTimeout(t);
	stopInterval();

	timeclock = 30;
}

function timeZero() {
	if (timeclock === 0) {
		alert("times up");
		stopTime();
		// stopInterval();
		clearInterval(go);
	}
}


function startGame(){
			timer();
			console.log(timeclock);
		}
// startGame();

function stopInterval() {
	clearInterval(go);
}

function clickDiv() {

	go.addEventListener("click", function() {

		startGame();
		var molego = setInterval(function(){ 
			// celltest.removeChild(test);
			var numtest =  Math.floor((Math.random() * 25) + 1);
			var numid = 'id' + String(numtest);
			var table = document.getElementById(numid);
			var mole = document.createElement("div");
			var time;
			function timeStart() {
				time = setTimeout(function() {
						// alert("timeout working");
						table.removeChild(mole);
					}, 2000);
				}
			function timeStop() {
				clearTimeout(time);
			}
			// var stoptime = function() {
			// 	clearTimeout()
			// }
			function generate() {
				// var numtest =  Math.floor((Math.random() * 25) + 1);
				// var numid = 'id' + String(numtest);
				console.log(numtest);
				console.log(numid);
				
				// var table = document.getElementById(numid);
				// var mole = document.createElement("div");
				mole.setAttribute('id', numid);
				mole.className = 'mole';
				console.log(mole);
				table.appendChild(mole);
				timeStart()
				;
				
				mole.addEventListener("click", function() {
					// alert("mole has been clicked");
					timeStop();
					var input = document.getElementById('mybox');
    				input.value = parseInt(mybox.value, 10) + 1;
					table.removeChild(mole);
				})
				
			}
			
			
			generate();

		stop.addEventListener("click", function() {
			// alert("stop worked");
			clearInterval(molego);
		})	

		}, 3000);


		// var cellmove = document.getElementById('id6');
		// celltest.removeChild(test);
		
		//stops set interval from generating
		clearInterval();
	});
}
clickDiv();