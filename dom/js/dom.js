/* code for date in footer*/
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("modify").innerHTML = document.lastModified

const listsize = document.querySelector("#favchap");
const buildButton = document.querySelector("button");
const list = document.querySelector(".list");


buildButton.addEventListener("click", () => {
  
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        li.innerHTML = listsize.value;
        deleteBtn.textContent = `❌`;

        li.append(deleteBtn);
        list.append(li);

        deleteBtn.addEventListener("click", function() {
            list.removeChild(li);
            // focus puts the focus back into the input box(cursor)
            listsize.focus();
        
        });

        listsize.value = ``;
        listsize.focus();
});