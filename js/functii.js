 const paginationButtons = document.querySelectorAll(".pButton");

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



function attachCardsPersons(persons , personsLength, start){
    let container=document.querySelector(".student-list");
  
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
 
  
    for(let i=start;i<personsLength;i++){


        container.appendChild(createCard(persons[i]));
    }
}


//todo:paginatie



console.log(data.length);

paginationButtons.forEach((paginationButton) => {
         
    paginationButton.addEventListener("click", () => {
    
        paginationButtons.forEach((paginationButton) => paginationButton.classList.remove("active") )

        paginationButton.classList.add("active");

        let index = Number(paginationButton.textContent);
        let dataLength = data.length;                              

        attachCardsPersons(data, index * 9 , (index - 1) * 9);
    })
})

