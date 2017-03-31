console.log("js is working");

//GLOBAL VARS
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var currentPlayer = 1;
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


//alert DIVs
var container = document.querySelector('.container');
var buttonCondition;
//player 1 round over message
var roundOver = document.createElement('div');
roundOver.className = 'roundOver';
var timerEnds = document.createElement('h3');
timerEnds.innerHTML = "PLAYER 2 GO!";
roundOver.appendChild(timerEnds);
var exitbutton = document.createElement('button');
exitbutton.innerHTML = "OK";
exitbutton.addEventListener("click", function() {
	container.removeChild(roundOver);
	
});
roundOver.appendChild(exitbutton);

//player 2 round over message
var round2Over = document.createElement('div');
round2Over.className = 'roundOver';
var timer2Ends = document.createElement('h3');
timer2Ends.innerHTML = "GAME OVER";
round2Over.appendChild(timer2Ends);
var exit2button = document.createElement('button');
exit2button.innerHTML = "OK";
exit2button.addEventListener("click", function() {
	container.removeChild(round2Over);
	
});
round2Over.appendChild(exit2button);

//winner message
var winnerdiv = document.createElement('div');
winnerdiv.className = 'roundOver';
var player1wins = document.createElement('h3');
player1wins.className = "winnertext";
player1wins.innerHTML = "PLAYER 1 WINS!!";

var player2wins = document.createElement('h3');
player2wins.className = "winnertext";
player2wins.innerHTML = "PLAYER 2 WINS!!";

var playerDraw = document.createElement('h3');
playerDraw.className = "winnertext";
playerDraw.innerHTML = "IT'S A TIE!!";

var resetButton = document.createElement('button');
resetButton.className = "resetGo";
resetButton.innerHTML = "RESET";
resetButton.addEventListener("click", function() {
	container.removeChild(winnerdiv);
	location.reload();
});
// winnerdiv.appendChild(resetButton);
// container.appendChild(winnerdiv);

//SOUNDS
var audio4 = document.querySelector('.audio4');
var audio14 = document.querySelector('.audio14');
var achievement = document.querySelector('.achievement');
var navigate = document.querySelector('.navigate');
var point = document.querySelector('.point');

//TIMER FUNCTIONS

function timer() {
	t = setTimeout(function() {
		timeclock --;
		timediv.innerHTML = timeclock;
		timer();
		navigate.play();
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
		container.appendChild(roundOver);
		audio14.play();
		stopTime();
		gametime = false;	
		// input.value = 0;
		timediv.innerHTML = timeclock;
		switchPlayer();
		clearInterval(molego);	
	} else if (timeclock === 0 && currentPlayer === 2) {
		console.log(currentPlayer);
		console.log("round 2 is over");
		container.appendChild(round2Over);
		audio14.play();
		determineWinner();
		stopTime();
		gametime = false;
		timediv.innerHTML = timeclock;
	}
}
var delayWinMessage;

function determineWinner() {
	if (player1score > player2score) {
		// alert("Player 1 wins!");
		delayWinMessage = setTimeout(function() {
		winnerdiv.appendChild(player1wins);
		winnerdiv.appendChild(resetButton);
		container.appendChild(winnerdiv);
		achievement.play();
		}, 3000);
	} else if (player1score < player2score) {
		// alert("Player 2 wins!");
		delayWinMessage = setTimeout(function() {
		winnerdiv.appendChild(player2wins);
		winnerdiv.appendChild(resetButton);
		container.appendChild(winnerdiv);
		achievement.play();
		}, 3000);
	} else {
		// alert("Draw!");
		delayWinMessage = setTimeout(function() {
		winnerdiv.appendChild(playerDraw);
		winnerdiv.appendChild(resetButton);
		container.appendChild(winnerdiv);
		achievement.play();
		}, 3000);
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

//GAME START PROCESS

function clickDiv() {

	go.addEventListener("click", function() {
		gametime = true;
		point.play();
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
    				audio4.play();
					table.removeChild(mole);
				});
				}
			}
			
			
			generate();

		}, 2000);

	});
}
clickDiv();