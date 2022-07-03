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


  
  
  