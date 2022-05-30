var temp = document.querySelector(".temperature");
var wind = document.querySelector("#wind");
var chill = document.querySelector("#chill");

chill = 35.74 + (.6215 * temp) - (35.75 * (wspeed**16))
console.log(chill)