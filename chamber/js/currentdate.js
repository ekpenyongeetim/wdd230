/* code for date in footer
document.getElementById("lastmodified").innerHTML = document.lastModified
*/
document.getElementById("year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;