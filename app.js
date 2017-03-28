console.log("js is working");


var test = document.createElement("div");
test.className = "test";
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
function startGame() {
	go.addEventListener("click", function() {
		// alert("go button pushed");
	})
}
startGame();

function clickDiv() {

	go.addEventListener("click", function() {

		setInterval(function(){ 
			// celltest.removeChild(test);
			var numtest =  Math.floor((Math.random() * 25) + 1);
			var numid = 'id' + String(numtest);
			var table = document.getElementById(numid);
			var newdiv = document.createElement("div");
			var time;
			function timeStart() {
				time = setTimeout(function() {
						// alert("timeout working");
						table.removeChild(newdiv);
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
				// var newdiv = document.createElement("div");
				newdiv.setAttribute('id', numid);
				newdiv.className = 'test';
				console.log(newdiv);
				table.appendChild(newdiv);
				timeStart();
				
				newdiv.addEventListener("click", function() {
					// alert("newdiv has been clicked");
					timeStop();
					var input = document.getElementById('mybox');
    				mybox.value = parseInt(mybox.value, 10) + 1;
					table.removeChild(newdiv);
				})
				
			}
			
			
			generate();

			// var timeout = setTimeout(function() {
			// 	alert("timeout working");
			// }, 1000);
			// timeout();
			// table.removeChild(newdiv);
		}, 3000);	
		// var cellmove = document.getElementById('id6');
		// celltest.removeChild(test);
		
		//stops set interval from generating
		clearInterval();
	});
}
clickDiv();