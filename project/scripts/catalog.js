import {hamburguer,footer }from './utils.mjs';
hamburguer();
footer();

const packages = [
    {
      id: 1,  
      name: "Cancun",
      reservationDate: "April to October 2025",
      price:"$10,990 MX",
      time: "4 Nights",
      description:"Great to visit with your partner",
      include: ["Flight", "Booking", "Daily meals", "illimit snacks", "illimit drinks", "Daily breakfast", "Daily dinners"],
      imageUrl:
      "./images/cancun-offer.webp"
    },
   {  
        id: 2,  
        name: "Colombia",
        reservationDate: "August to Dicember 2025",
        price:"$1,500 USD",
        time: "7 Nights",
        description:"Grat to visit with your friends",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Daily dinners", "Transportation"],
        imageUrl:
        "./images/colombia.jpg"
    },
    {  
        id: 3,  
        name: "Cozumel",
        reservationDate: "August to Dicember 2025",
        price:"$10,500 MX",
        time: "4 Nights",
        description:"Grat to visit with your Partner",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Ferry", "Transportation"],
        imageUrl:
        "./images/cozumel-offer.webp"
    },
    {  
        id: 4,  
        name: "Cuba",
        reservationDate: "February to June 2025",
        price:"$18,800 MX",
        time: "4 Nights",
        description:"Great to visit with your Friends",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Ferry", "Transportation", "Night Shows"],
        imageUrl:
        "./images/Cuba.jpg"
     },
     {  
        id: 5,  
        name: "Dubai and Bali",
        reservationDate: "February to October 2025",
        price:"$64,800 MX",
        time: "11 Nights",
        description:"Great to visit with your Friends or partner",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Ferry", "Transportation", "Night Shows"],
        imageUrl:
        "./images/DubaiAndBali.jpg"
    },
    {  
        id: 6,  
        name: "Egypt",
        reservationDate: "February to September 2025",
        price:"$48,750 MX",
        time: "12 Nights",
        description:"Great to visit with your Friends or partner",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Ferry", "Transportation", "Night Shows"],
        imageUrl:
        "./images/Egipto.jpg"
    },
    {  
        id: 7,  
        name: "Europeas",
        reservationDate: "May to December 2025",
        price:"$39,200 MX",
        time: "8 Nights",
        description:"Great to visit with your Friends or partner",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Ferry", "Transportation", "Night Shows"],
        imageUrl:
        "./images/Europeas.jpg"
    },
    {   id: 8,  
        name: "Japan",
        reservationDate: "May to October 2025",
        price:"$57,690 MX",
        time: "8 Nights",
        description:"Great to visit with your Friends or partner",
        include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Ferry", "Transportation", "Night Shows"],
        imageUrl:
        "./images/japon.jpg"
     },
     {   id: 9,  
         name: "Mediterranio",
         reservationDate: "December 21, 2025",
         price:"$23,799 MX",
         time: "7 Nights",
         description:"Great to visit with your Friends or partner",
         include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Temples", "Transportation", "museums"],
         imageUrl:
         "./images/mediterranio.jpg"
      },
      {   id: 10,  
          name: "Mexico City",
          reservationDate: "January to March 2025",
          price:"$9,990 MX",
          time: "4 Nights",
          description:"Great to visit with your Friends or partner",
          include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Transportation", "museums"],
          imageUrl:
          "./images/Mexico City offer.webp"
       },
       {   id: 11,  
           name: "Greek Islands",
           reservationDate: "May to August 2025",
           price:"$50,570 MX",
           time: "11 Nights",
           description:"Great to visit with your Friends or partner",
           include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Transportation", "museums"],
           imageUrl:
           "./images/IslasGriegas.jpg"
        },
        {   id: 12,  
            name: "Peru",
            reservationDate: "July 2024 to February 2025",
            price:"$1,800 USD",
            time: "8 Nights",
            description:"Great to visit with your Friends or partner",
            include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Transportation", "museums"],
            imageUrl:
            "./images/peru.jpg"
         },
         {   id: 13,  
             name: "Punta Cana",
             reservationDate: "July 2024 to February 2025",
             price:"$32,830 MX",
             time: "7 Nights",
             description:"Great to visit with your Friends or partner",
             include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Transportation", "museums"],
             imageUrl:
             "./images/puntaCana.jpg"
          },
          {   id: 14,  
              name: "Thailandia",
              reservationDate: "February to November 2025",
              price:"$57,750 MX",
              time: "9 Nights",
              description:"Great to visit with your Friends or partner",
              include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Transportation", "museums"],
              imageUrl:
              "./images/Tailandia.jpg"
           },
           {   id: 15,  
               name: "Thailandia",
               reservationDate: "August to March 2025",
               price:"$2,400 USD",
               time: "13 Nights",
               description:"Great to visit with your Friends or partner",
               include: ["Flight", "Booking", "Tourist Guide", "illimit snacks", "illimit drinks", "Daily breakfast", "Transportation", "museums"],
               imageUrl:
               "./images/turquiaAndDubai.jpg"
            }
  ];
const buttons = document.querySelectorAll("button");
const tripDetails = document.querySelector('#package-detail');
const gallery = document.getElementById('gallery');
function displayTripDetails(trip){
    
    tripDetails.innerHTML = "";
    tripDetails.innerHTML = `
    <h2>${trip.name}</h2>
    <h3>${trip.price}</h3>
    <p>${trip.reservationDate}</p>
    <p><strong>Duration</strong>: ${trip.time}</p>
    <p>${trip.description}</p>
    <p><strong>Include</strong>: ${trip.include.join(', ')}</p>
    <button id="closeModal"> Close</button>`;

    tripDetails.showModal();
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", ()=>{
        tripDetails.close();
    });
};

function renderCars(packages){
    gallery.innerHTML = "";
    packages.forEach(pge =>{
        const packageDiv = document.createElement("div");
        packageDiv.innerHTML = `<picture><img src="${pge.imageUrl}" alt="https://www.facebook.com/alltripcuu/photos" 
        loading="lazy" width="200" height="300"></picture>`;
        packageDiv.classList.add('temple');
        packageDiv.classList.add('hover');

        gallery.appendChild(packageDiv);
        packageDiv.addEventListener("click", ()=>{
            displayTripDetails(pge);
        });
    });
};

renderCars(packages);