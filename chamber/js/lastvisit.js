const d = Date.now();
console.log(d);
let last_time = d;

if (localStorage.getItem("lasttime")){
    last_time = localStorage.getItem("lasttime");
    localStorage.setItem("lasttime",d);
}
else{
    localStorage.setItem("lasttime", d);
}
    localStorage.setItem("lasttime", (d));

var timegap = parseInt((d -last_time)/ (1000*60*60*24));
console.log(timegap);
document.getElementById("last").innerHTML = "Days since last visit: " + timegap
