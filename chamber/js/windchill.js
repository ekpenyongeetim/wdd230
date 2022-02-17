

    let temp = parseInt(document.getElementById("temp").value);
    let speed = parseInt(document.getElementById("wind").value);

    let message;
    if (temp <= 50 && speed > 3) {
        message = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        
      }
      else {
        message = "No wind here";
      }
  document.getElementById("output").innerHTML = message+"℃"; 