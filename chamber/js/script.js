/* code for date in header*/
const datefield = document.querySelector("#date");
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

 /* windchill code*/

 function CheckWind() {
    let temp = parseInt(document.getElementById("temp").value);
    let speed = parseInt(document.getElementById("wind").value);
    let message = windChill (temp, speed);
    document.getElementById("output").innerHTML = "Wind Chill is" + message; 
}

function windChill (temp, speed){
    let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return Math.round(f); 
}

