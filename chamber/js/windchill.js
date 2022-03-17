/*let t = parseFloat(document.getElementById("temp").textContent);
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
*/

//wind chill
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Calabar&units=imperial&appid=f3293b70767c8bf86281114d4805a4f8`;

fetch(apiURL)
  .then((response) => response.json())
  .then((x) => {

    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#weathericon');
    const caption = document.querySelector('figcaption');
    const windSpeed = document.querySelector('#windSpeed');
    const windChill = document.querySelector('#windChill');
    

    currentTemp.textContent = x.main.temp.toFixed(0);
    windSpeed.textContent = x.wind.speed.toFixed(0);

    if (x.main.temp <=50 && x.wind.speed > 3 ) {
      windChill.textContent = x.main.feels_like.toFixed(1); 
    } else {
      windChill.textContent = `N/A`; 
    }
    
    let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    let imgalt = x.weather[0].description;
    imgalt = imgalt.split('').map(capitalize).join('');

    currentTemp.textContent = x.main.temp.toFixed(0);
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
    caption.innerHTML = imgalt;
    
     
  });

  function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
