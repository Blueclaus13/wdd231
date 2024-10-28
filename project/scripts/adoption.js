const animals = [
    {
      id: 8,  
      name: "Pirata",
      type: "Dog",
      gender:"Male",
      age: "3 years",
      description:"Playful. He loves playing with kids or sport activities",
      health:"survive Rickettsies",
      imageUrl:
      "https://placedog.net/200/300/?id=8"
    },
   {  
        id: 9, 
        name: "Coffee",
        type: "Dog",
        gender:"Male",
        age: "5 years",
        description:"His favorite activity is sleeping and listen to music",
        health:"Renal problems in treatment",
        imageUrl:
        "https://placedog.net/200/300/?id=9"
    },
    {  
        id: 10, 
        name: "Doris",
        type: "Dog",
        gender:"Female",
        age: "2 years",
        description:"Friendly girl. She likes walks and sunrises",
        health:"She was in malnutrition.",
        imageUrl:
        "https://placedog.net/200/300/?id=10"
    },
    {  
        id: 17, 
        name: "Skimo",
        type: "Dog",
        gender:"Male",
        age: "6 months",
        description:"Playful boy. He's a big size dog learning manners",
        health:"It took dewormer. It's important the compromise for sterilization.",
        imageUrl:
        "https://placedog.net/200/300/?id=17"
     },
     {  
        id: 15, 
        name: "Snowflake",
        type: "Dog",
        gender:"Male",
        age: "6 years",
        description:"playful and young, careful with your shoes he loves them",
        health:"It took dewormer. It's important the compromise for sterilization.",
        imageUrl:
        "https://placedog.net/200/300/?id=15"
    },
    {  
        id: 16, 
        name: "Smiley",
        type: "Dog",
        gender:"Female",
        age: "1 years",
        description:"She is nice and sweet. She loves pettings.",
        health:"She is anxious but healthy",
        imageUrl:
        "https://placedog.net/200/300/?id=16"
    },
    {  
        id: 22, 
        name: "Ruddy",
        type: "Dog",
        gender:"Female",
        age: "2 years",
        description:"Sweet girl. She loves sitting next to you. She's protective and likes company",
        health:"healthy",
        imageUrl:
        "https://placedog.net/200/300/?id=22"
    },
    {   id: 23, 
        name: "Loky",
        type: "Dog",
        gender:"Male",
        age: "1 years",
        description:"playful and crazy. He's a medium dog loving attention.",
        health:"survived parvovirus",
        imageUrl:
        "https://placedog.net/200/300/?id=23"
     }
  ];

  function renderCars(animals){
    const template = animals.map( (animal) =>
        `<div class="temple hover">
            <h2>${animal.name}</h2>
            <div class="detail">
                <span class="label">Name: </span>
                <span class="value">${animal.name}</span>
            </div>
            <div class="detail">
                <span class="label">Age: </span>
                <span class="value">${animal.age}</span>
            </div>
            <div class="detail">
                <span class="label">Type: </span>
                <span class="value">${animal.type}</span>
            </div>
            <div class="detail">
                <span class="label">Gender: </span>
                <span class="value">${animal.gender}</span>
            </div>
            <div class="detail">
                <span class="label">Description: </span>
                <span class="value">${animal.description}</span>
            </div>
            <div class="detail">
                <span class="label">Health data: </span>
                <span class="value">${animal.health}</span>
            </div>
            <picture><img src="${animal.imageUrl}" alt="https://placedog.net" loading="lazy" width="200" height="300"></picture>
        </div>`
    );
    document.querySelector("#gallery").innerHTML = template.join("");
}

function renderOptions(animals) {
    const selector = document.querySelector("#products");
    const options = animals.map((animal)=>{
        return`<option value="${animal.id} ">${animal.name}</option>`;
    });
    selector.innerHTML += options;      
    };


    // Count times visited review

const visits = document.querySelector(".visits");
let getVisits = parseInt(localStorage.getItem("reviews")) || 0;

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  if (path.includes("review.html")) {
    getVisits += 1;
    localStorage.setItem("reviews", getVisits);
    visits.textContent = getVisits;
  }
  else if(path.includes("form.html")){
    renderOptions(animals);
  }else if(path.includes("adoptions.html")){
    renderCars(animals);
  }
});

