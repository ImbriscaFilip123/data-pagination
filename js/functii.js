
//todo functtie ce primeste ca parametru o persoana si returneaza un card

function createCard(person)
{
    let item=document.createElement("li");

    
    item.classList.add("student-item");
    item.classList.add("cf");

    item.innerHTML=`
        <div class="student-details">
        <img class="avatar" src="${person.picture.large}" alt="Profile Picture">
        <h3  class="name editableInput">${person.name.first} ${person.name.last}</h3>
        <span class="email editableInput" >${person.email}</span>
        </div>
        <div class="joined-details">
        <span class="date editableInput" >Joined ${person.registered.date}</span>
        </div>
        <button class="editBtn">Edit</button>
    `


    return item;

}


//todo functie ce primeste ca parametru un vector de persoane si populeaza cardurile



function attachCardsPersons(persons){
    let container=document.querySelector(".student-list");

    container.innerHTML="";
    for(let i=0;i<persons.length;i++){
        container.appendChild(createCard(persons[i]));
    }
}







//todo:paginatie


//todo functie ce primeste :  array nr paginii si n pe pagina si returneaza pagina


//[23,43,32,3,34,21,32,43,54,567,213,43,12,32]





function  pagination(array,pagina,perPagina){

    let i;
    let start = perPagina * (pagina - 1) ;
    let finish = (perPagina * pagina) - 1;

    let aux=[];
    
    if(start == -1){
        start = 1;
    }

    console.log(start , finish);

    for(i= start ; i<array.length && i <= finish; i++){
       aux.push(array[i]);
    }

    return aux;

}





function createPage(nr){
    let perPagina=9;
    let persons=pagination(data,nr,perPagina);
    attachCardsPersons(persons);
}


function getPersonFromForm(){
 
    const addFName = document.querySelector(".addFirstName").value;
    const addLName = document.querySelector(".addLastName").value;
    const addAge = document.querySelector(".addAge").value;
    const addEmail = document.querySelector(".addEmail").value;
    const addDate = document.querySelector(".addDate").value;
    return ({
        name: {
          title: "Miss",
          first: addFName,
          last: addLName,
        },
        email: addEmail,
        registered: {
          date: addDate,
          age: Number(addAge),
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/25.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
        },
      })

}


function transformToInput(element){
     
 
 
     const text = element.textContent;

     const input = document.createElement('input');
     input.type = "text";
     input.value = text;
     input.className = 'editable-input';
     
     input.setAttribute('data-original-tag', element.tagName.toLowerCase());
     input.setAttribute('data-original-classes', element.className);

     element.replaceWith(input);
}


function saveEdit(input) {
    const value = input.value;
    const originalTag = input.getAttribute('data-original-tag');
    const originalClasses = input.getAttribute('data-original-classes');
    const newElement = document.createElement(originalTag);
    newElement.textContent = value;
    newElement.setAttribute('data-original-tag', originalTag);

   
    if (originalClasses) {
        newElement.className = originalClasses;
    }

    input.replaceWith(newElement);
}


// paginationButtons.forEach((paginationButton) => {
         
//     paginationButton.addEventListener("click", () => {
    
//         paginationButtons.forEach((paginationButton) => paginationButton.classList.remove("active") )

//         paginationButton.classList.add("active");

//         let index = Number(paginationButton.textContent);
//         let dataLength = data.length;                              

//         attachCardsPersons(data, index * 9 , (index - 1) * 9);
//     })
// })

// pagination.addEventListener("click" , (event) => {

//    let object = event.target;

//    if(object.classList.contains("pButton")){
//     console.log("test");
//    }

// })
