const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=f3293b70767c8bf86281114d4805a4f8`;

fetch(apiURL)
  .then((response) => response.json())
  .then((x) => {
    
    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#weathericon');
    const caption = document.querySelector('figcaption');

    currentTemp.textContent = x.main.temp.toFixed(0);
    let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    let imgalt = x.weather[0].description;
    imgalt = imgalt.split('').map(capitalize).join('');

    currentTemp.textContent = x.main.temp.toFixed(0);
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
    caption.innerHTML = imgalt;
    
     
  });

  function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.splice(1)}`;
  }
/*
  or do this

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=f3293b70767c8bf86281114d4805a4f8`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#current-temp').textContent = jsObject.main.temp;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc; 
  });
*/