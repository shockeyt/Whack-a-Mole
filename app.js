console.log("js is working");

var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var currentPlayer = 1
var go = document.querySelector('.go');
var stop = document.querySelector('.stop');
var timediv = document.querySelector('#timer');
var input = document.getElementById('mybox');
var player1score = 0;
var player2score = 0;
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
	// clearTimeout(time);
	stopInterval();

	timeclock = 30;
}

function timeZero() {
	if (timeclock === 0 && currentPlayer === 1) {
		// alert("times up");
		console.log("round is over");
		stopTime();
		gametime = false;	
		input.value = 0;
		timediv.innerHTML = timeclock;
		switchPlayer();
		clearInterval(molego);	
	} else if (timeclock === 0 && currentPlayer === 2) {
		console.log(currentPlayer);
		console.log("round 2 is over");
		determineWinner();
		stopTime();
		gametime = false;
		timediv.innerHTML = timeclock;
	}
}

function determineWinner() {
	if (player1score > player2score) {
		alert("Player 1 wins!");
	} else if (player1score < player2score) {
		alert("Player 2 wins!");
	} else {
		alert("Draw!");
	}
}
function switchPlayer() {
	if (currentPlayer == 1) {
		currentPlayer++;
	}
	else {
		currentPlayer--;
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
var time;
var molego;
function clickDiv() {

	go.addEventListener("click", function() {
		gametime = true;
		startGame();
		molego = setInterval(function(){ 
			// celltest.removeChild(test);
			var numtest =  Math.floor((Math.random() * 25) + 1);
			var numid = 'id' + String(numtest);
			var table = document.getElementById(numid);
			var mole = document.createElement("div");
			
			function timeStart() {
				time = setTimeout(function() {
						// alert("timeout working");
						table.removeChild(mole);
						console.log(time);
					}, 1000);
				}
			function timeStop() {
				clearTimeout(time);
			}
			// var stoptime = function() {
			// 	clearTimeout()
			// }
			function generate() {
				if (gametime === true) {
				// console.log(timeclock);
				// console.log(numtest);
				// console.log(numid);
				
				
				mole.setAttribute('id', numid);
				mole.className = 'mole';
				// console.log(mole);
				table.appendChild(mole);
				timeStart();
				
				mole.addEventListener("click", function() {
					// alert("mole has been clicked");
					timeStop();
					
    				// input.value = parseInt(input.value, 10) + 1;
    				
    				if (currentPlayer === 1) {
    					player1score++;
	    				// player1score = input.value;
	    				player1.textContent = player1score;
    				// console.log(player1);
    				} else if (currentPlayer === 2) {
    					player2score++;
    					// player2score = input.value;
    					player2.textContent = player2score;
    				// player2.value = input.value;
    				// player2.innerText = input.value;
    				// console.log(player2);
    				}
					table.removeChild(mole);
				})
				}
			}
			
			
			generate();

		}, 3000);

	});
}
clickDiv();