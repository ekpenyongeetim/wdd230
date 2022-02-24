/* code for date in header*/
const datefield = document.querySelector("#date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

/* code for hamburger menu*/
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;

 /* banner-close code*/
 document.querySelector(".bannerclose").addEventListener("click", function() {
    document.querySelector(".bannerclose").closest(".banner").style.display = "none";
 });

 /* banner Popup code*/

let banner = document.querySelector("#banner");
let dayOfWeek = new Date().getDay();

if (dayOfWeek == 2 || dayOfWeek == 3) {
  banner.style.display = "block";
}
