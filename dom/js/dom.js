/* code for date in footer*/
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("modify").innerHTML = document.lastModified

const listsize = document.querySelector("#favchap");
const buildButton = document.querySelector("button");
const list = document.querySelector("#list");


buildButton.addEventListener("click", function() => {
    //get the size
    let size = Number(listsize.value);

    // build HTML
    for (let i = 1;
        i <= size; i++) {
        let li = document.createElement("li");
        li.innerHTML = `Item: <strong>${i}</strong>`;
        list.append(li);
    }
});