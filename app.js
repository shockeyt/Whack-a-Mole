console.log("js is working");


// var test = document.createElement("div");
// test.className = "test";
// console.log(test);

// var celltest = document.getElementById('id1');
// function addDiv() {
// 	// var celltest = document.getElementById('id1');
// 	celltest.appendChild(test);
// 	console.log(celltest);
// } 
// addDiv();

var go = document.querySelector('.go');
// console.log(go);
//need startGame to engage clickDiv()
// function startGame() {
// 	go.addEventListener("click", function() {
// 		// alert("go button pushed");
// 	})
// }
// startGame();

var timediv = document.querySelector('#timer');
//countdown timer
var time = 30;
var t;
function timer() {
	t = setTimeout(function() {
		time --;
		timediv.innerHTML = time;
		timer();
	}, 1000); 
	timeZero();
	console.log(timediv);
}
function timeZero() {
	if (time === 0) {
		alert("times up");
		stopTime();
	}
}
function stopTime() {
	clearTimeout(t);
	time = 30;
}

function startGame(){
			timer();
			console.log(time);
		}
// startGame();

function clickDiv() {

	go.addEventListener("click", function() {

		startGame();
		setInterval(function(){ 
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
				mole.className = 'test';
				console.log(mole);
				table.appendChild(mole);
				timeStart()
				;
				
				mole.addEventListener("click", function() {
					// alert("mole has been clicked");
					timeStop();
					var input = document.getElementById('mybox');
    				mybox.value = parseInt(mybox.value, 10) + 1;
					table.removeChild(mole);
				})
				
			}
			
			
			generate();

			// var timeout = setTimeout(function() {
			// 	alert("timeout working");
			// }, 1000);
			// timeout();
			// table.removeChild(mole);
		}, 3000);	
		// var cellmove = document.getElementById('id6');
		// celltest.removeChild(test);
		
		//stops set interval from generating
		clearInterval();
	});
}
clickDiv();