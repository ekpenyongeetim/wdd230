/*/ initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now(); */



const lastVisit = localStorage.getItem('lastVisit');
const message = document.querySelector('.visits');


const DAY = 1000 * 60 * 60 * 24;


let lastDay = Math.trunc(lastVisit / DAY);
let today = Math.trunc(Date.now() / DAY);

let lastvisit = today - lastDay;



if (lastVisit == undefined){
    message.textContent = "Welcome to the the Lakeland chamber discovery, Hope you enjoy!";

} else {
    message.textContent = `${lastvisit} day(s) since last visit.`;
}

localStorage.setItem('lastVisit', Date.now());