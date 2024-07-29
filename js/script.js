const paginationButtons = document.querySelectorAll(".pButton");
const container = document.querySelector(".pagination");
const addBtn = document.querySelector(".addBtn");
const studentsList = document.querySelector(".student-list");


createPage(1);



container.addEventListener("click", (event) => {

    let object = event.target;

    if(object.classList.contains("pButton")){

        let pagina = Number(object.textContent);
    
        createPage(pagina);

        
    }

})


let pozitie=-1;

studentsList.addEventListener("click", (event) => {

    let object = event.target;

    if(object.classList.contains("editBtn")){

        if(object.innerText === "Save"){         

            let objectParent = object.parentElement;
            let inputs = objectParent.querySelectorAll('.editable-input');
            inputs.forEach(input => {
                saveEdit(input, pozitie);
            });
             object.innerText = "Edit";
            
        }
        else{
        object.style.backgroundColor = "blueviolet";
        object.innerText = "Save";

        let objectParent = object.parentElement;

         let name = objectParent.querySelector("h3");
         let email = objectParent.querySelector(".email");
         let date = objectParent.querySelector(".date");

         let names = name.textContent.split(" ");

         let i = cardPosition(names[0], names[1]);

         pozitie=i;
        
        transformToInput(name);
        transformToInput(email);
        transformToInput(date);
        }

    }

  


})



//crud -->create read update and delete

console.log(data[1]);

addBtn.addEventListener("click", () => {
 
    data.push(getPersonFromForm());
 
    console.log(getPersonFromForm());


})
