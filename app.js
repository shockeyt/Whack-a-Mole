console.log("js is working");

var test = document.createElement("div");
test.className = "test";
console.log(test);

function addDiv() {
	var celltest = document.getElementById('id1');
	celltest.appendChild(test);
	console.log(celltest);
} 
addDiv();