document.querySelector(
	"#lastmod"
).textContent = `Last Modification: ${document.lastModified}`;
document.querySelector(
  "#year"
).textContent = new Date().getFullYear();
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 18) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

  var temp = document.querySelector("#temp");
  var wind = document.querySelector("#wind");
  var chill = document.querySelector("#chill");
  
  const button = document.querySelector("#addBtn");
  button.addEventListener("click" , () => {
    console.log("here");
    const a = document.querySelector("#a")
    const b = document.querySelector("#b")
    console.log(a+b);
    const result = document.querySelector("#result")
    result.textContent = (a+b)
  })
