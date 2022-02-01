/* code for date in header*/
const datefieldUK = document.querySelector("aside");
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

/* code for hamburger menu*/
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;



