/* code for date in header*/
const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); 


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;

/* code for hamburger menu*/
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;



