var temp = document.querySelector(".temperature");
var wispeed = document.querySelector(".wspeed");
var chill = document.querySelector(".chill");
var calcchill = (35.74 + (.6215 * temp) - (35.75 * (wispeed**16)));
chill.innerHTML = calcchill;
