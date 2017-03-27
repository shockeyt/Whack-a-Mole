console.log("js is working");


var test = document.createElement("div");
test.className = "test";
// console.log(test);

var celltest = document.getElementById('id1');
function addDiv() {
	// var celltest = document.getElementById('id1');
	celltest.appendChild(test);
	console.log(celltest);
} 
addDiv();

var go = document.querySelector('.go');
console.log(go);
function startGame() {
	go.addEventListener("click", function() {
		alert("go button pushed");
	})
}
startGame();

function clickDiv() {
	test.addEventListener("click", function() {
		setInterval(function(){ 
			// celltest.removeChild(test);
			function generate() {
				var numtest =  Math.floor((Math.random() * 25) + 1);
				var numid = 'id' + String(numtest);
				console.log(numtest);
				console.log(numid);
				
				var table = document.getElementById(numid);
				var newdiv = document.createElement("div");
				newdiv.setAttribute('id', numid);
				newdiv.className = 'test';
				console.log(newdiv);
				table.appendChild(newdiv);
			}
			generate();
		}, 3000);	
		// var cellmove = document.getElementById('id6');
		celltest.removeChild(test);
		// alert("clicked test div");
	});
}
clickDiv();