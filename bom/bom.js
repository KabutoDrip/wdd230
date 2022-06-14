var input
var button
var list

function appendList() {
	var input = document.getElementById("favchap").value;
	var button = document.createElement("button");
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	button.innerHTML = "❌";
	li.appendChild(document.createTextNode(input));
	li.appendChild(button)
	ul.appendChild(li);
	button.addEventListener("click", function (){
		li.parentNode.removeChild(li);

	})

}