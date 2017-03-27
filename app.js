console.log("js is working");

var test = document.createElement("div");
test.className = "test";
console.log(test);

var celltest = document.getElementById('id1');
function addDiv() {
	// var celltest = document.getElementById('id1');
	celltest.appendChild(test);
	console.log(celltest);
} 
addDiv();
function clickDiv() {
	test.addEventListener("click", function() {
		
		celltest.removeChild(test);
		var cellmove = document.getElementById('id6');
		cellmove.appendChild(test);
		alert("clicked test div");
	});
}
clickDiv();