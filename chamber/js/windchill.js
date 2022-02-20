let t = parseFloat(document.getElementById("temp").textContent);
let s = parseFloat(document.getElementById("wind").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = windChill(t,s);
} else {
  windchill = "N/A"
}

document.querySelector("#output").innerHTML = windchill;

function windChill(temp, speed) {
	let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
  return Math.round(windChill);
}
