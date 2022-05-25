var input
var button
var list

button.addEventListener('click', function() {
	input = document.querySelectorAll("input")})

var ul = document.getElementById("list");
var li = document.createElement("li");
li.appendChild(document.createTextNode(input));
ul.appendChild(li);