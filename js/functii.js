//todo functtie ce primeste ca parametru o persoana si returneaza un card

function createCard(person)
{
    let item=document.createElement("li");

    
    item.classList.add("student-item");
    item.classList.add("cf");

    item.innerHTML=`
        <div class="student-details">
        <img class="avatar" src="${person.picture.large}" alt="Profile Picture">
        <h3>${person.name.first} ${person.name.last}</h3>
        <span class="email">${person.email}</span>
        </div>
        <div class="joined-details">
        <span class="date">Joined ${person.registered.date}</span>
        </div>
    `


    return item;

}


//todo functie ce primeste ca parametru un vector de persoane si populeaza cardurile



function attachCardsPersons(persons){


    let container=document.querySelector(".student-list");
    for(let i=0;i<persons.length;i++){


        container.appendChild(createCard(persons[i]));
    }
}


//todo:paginatie

