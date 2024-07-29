
//todo functtie ce primeste ca parametru o persoana si returneaza un card



let currentPage = 1;
const perPagina = 9;

function pagination(array, pagina, perPagina) {
  let start = perPagina * (pagina - 1);
  let finish = start + perPagina;
  return array.slice(start, finish);
}

function createCard(person, index) {
  let item = document.createElement("li");
  item.classList.add("student-item", "cf");
  item.setAttribute("data-id", index); 

  item.innerHTML = `
    <div class="student-details">
      <img class="avatar" src="${person.picture.large}" alt="Profile Picture">
      <h3 class="name editableInput">${person.name.first} ${person.name.last}</h3>
      <span class="email editableInput">${person.email}</span>
    </div>
    <div class="joined-details">
      <span class="date editableInput">Joined ${person.registered.date}</span>
    </div>
    <button class="editBtn">Edit</button>
    <button class="deleteBtn">Delete</button>
  `;

  
  item.querySelector('.deleteBtn').addEventListener('click', function() {
    deleteUser(index);
  });

  return item;
}

function attachCardsPersons(persons) {
  let container = document.querySelector(".student-list");
  container.innerHTML = "";
  persons.forEach((person, index) => {
    container.appendChild(createCard(person, index));
  });
}

function createPage(page) {
  currentPage = page;
  let persons = pagination(data, page, perPagina);
  attachCardsPersons(persons);
 
}

function deleteUser(index) {
  let actualIndex = (currentPage - 1) * perPagina + index;
  data.splice(actualIndex, 1);

  createPage(currentPage); 
}




createPage(currentPage);


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


function saveEdit(input,index) {
    const value = input.value;
    const originalTag = input.getAttribute('data-original-tag');
    const originalClasses = input.getAttribute('data-original-classes');
    const newElement = document.createElement(originalTag);
    newElement.textContent = value;
    newElement.setAttribute('data-original-tag', originalTag);
    

    if (originalClasses) {
        newElement.className = originalClasses;
    }

    
    originalClasses.split(" ");
    
    if(originalTag == "h3"){

      let array = newElement.textContent.split(" ");

        data[index].name.first=array[0];
        data[index].name.last=array[1];
    }
    else if(originalClasses[0] == "email"){

        data[index].email = array.textContent;
    }
    else if(originalClasses[0] == "date"){

        data[index].registered.date == array.textContent;
    }


    

    
   
    input.replaceWith(newElement);

    return(newElement.textContent);
  

 
}




//functie ce primeste ca paramteru  numele unei persoane si returneaza 
//pozitia din vector unde  se afla persoana

function cardPosition(first ,last){

   
    let i ;

    for(i=0 ; i< data.length; i++)
    {
        
        if(data[i].name.first == first && data[i].name.last==last)
        return i;
    }
    return -1;
}


function deleteUser(index) {
    let actualIndex = (currentPage - 1) * perPagina + index;
    data.splice(actualIndex, 1); 
 
    createPage(currentPage);
  }