var input
var button
var list

function appendList() {
	var input = document.getElementById("favchap");

	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input));
	ul.appendChild(li);
}