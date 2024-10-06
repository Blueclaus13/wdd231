import clearChildren from './utils.mjs';
const url = 'data/members.json';
const companiesContainer = document.querySelector("#spotlights");
const aCompanies = {
    companies: [
        {
            "name": "Chihuahua Market",
            "image": "images/chihuahua-market.png",
            "address": "Street Libertad #519 Pacifico",
            "phone": "(614) 5-15-94-66",
            "website": "#", 
            "membership_level": 1,
            "info": "Business Association"
        },
        {
            "name": "Nike",
            "image": "images/logo-nike.webp",
            "address": "Street Carlos Fuero #1618 Totonaca",
            "phone": "(614) 4-20-94-55",
            "website": "Nike.com", 
            "membership_level": 1,
            "info": "Shop for shoes, sneakers and cleats"
        },
        {
            "name": "Safe Travels",
            "image": "images/safe-travels.png",
            "address": "Street Vallarta #1314 Obrera",
            "phone": "(614) 3-15-29-77",
            "website": "#", 
            "membership_level": 2,
            "info": "Safe Travels World Travel and Turism Council"
        },
        {
            "name": "Puma",
            "image": "images/puma-logo.webp",
            "address": "Street Villa Juarez #1014 Centro",
            "phone": "(614) 8-78-29-99",
            "website": "https://mx.puma.com", 
            "membership_level": 2,
            "info": "Research and shop all the latest gear from the world of Fashion, Sport, and everywhere in between"
        },
        {
            "name": "Coca-Cola",
            "image": "images/coca-cola-logo.svg",
            "address": "Street First #333 Infonavit",
            "phone": "(614) 6-78-29-99",
            "website": "https://www.coca-colaentuhogar.com", 
            "membership_level": 2,
            "info": "Explore ways you can be closer to the ones you love with meals worth sharing, festive playlists, and more holiday magic from Coke®"
        },
        {
            "name": "Pepsico",
            "image": "images/pepsico-logo.svg",
            "address": "Street Second #123 Libertad",
            "phone": "(614) 1-78-29-99",
            "website": "https://www.pepsico.com.mx", 
            "membership_level": 2,
            "info": "Food, snack, and beverage"
        },
        {
            "name": "Distrito Moderniza",
            "image": "images/distrito-moderniza.png",
            "address": "Street Second #4567 Distrito 1",
            "phone": "(614) 4-78-29-99",
            "website": "#", 
            "membership_level": 3,
            "info": "Business Association"
        }
    ],
    init: function() {
        
    },
    displayByMembershipType: function(membership_level){
        const spotlights = document.querySelector("#spotlights");
        if(spotlights.hasChildNodes()){
            clearChildren(spotlights);
        }
        const newList = this.companies.filter((company) => company.membership_level === membership_level);
        renderCompanies(newList);
    }
};

const renderCompanies = (companies) => {

    companies.forEach((company) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let info = document.createElement("p");
        let url = document.createElement("a");

        
        name.innerHTML = `${company.name}`;

        address.innerHTML = `${company.address}`;
        phone.innerHTML = `${company.phone}`;
        info.innerHTML = `${company.phone}`;

        url.href = `${company.website}`;
        url.textContent = "Visit website";
        
        logo.src = `${company.image}`;
        logo.alt = `${company.name} logo`;
        logo.loading = "lazy";
        logo.width = 150;
        logo.height = 100;
        logo.classList = "logo";

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        companiesContainer.appendChild(card);
    });
  };

  export default aCompanies;