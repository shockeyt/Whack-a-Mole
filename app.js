console.log("js is working");

var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var go = document.querySelector('.go');
var stop = document.querySelector('.stop');
var timediv = document.querySelector('#timer');
var input = document.getElementById('mybox');

var timeclock = 30;
timediv.innerHTML = timeclock;
var t;
var gametime;
function timer() {
	t = setTimeout(function() {
		timeclock --;
		timediv.innerHTML = timeclock;
		timer();
	}, 1000); 
	timeZero();
	// console.log(timeclock);
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
		gametime = false;	
		input.value = 0;	
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
		gametime = true;
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
				if (gametime === true) {
					console.log(timeclock);
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
					
    				input.value = parseInt(mybox.value, 10) + 1;
    				player1.innerHTML = input.value;
					table.removeChild(mole);
				})
				}
			}
			
			
			generate();
		
			// if (timeclock === 0) {
			// 	alert("gameover!");
			// 	stopTime();
			// 	// stopInterval();
			// 	clearInterval(molego);
			// }
		
		
		stop.addEventListener("click", function() {
			// alert("stop worked");
			clearInterval(molego);
			// timeStop();
		})	

		}, 3000);


	});
}
clickDiv();