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
		// var cellmove = document.getElementById('id6')
		celltest.removeChild(test);
		alert("clicked test div");
	});
}
clickDiv();