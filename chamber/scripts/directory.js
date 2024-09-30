const url = 'data/members.json';
const companiesContainer = document.querySelector("#companies");


const displayCompanies = (companies) => {

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
        logo.width = 250;
        logo.height = 200;
        logo.classList = "logo";

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        companiesContainer.appendChild(card);
    });
  }

function handleViewOptionsClick(target) {
    
    if (target.id === "view-grid") {
        target.classList.toggle("active");
        document.getElementById("view-list").classList.toggle("active");
        companiesContainer.classList = "grid";
    } else if (target.id === "view-list") {
        target.classList.toggle("active");
        document.getElementById("view-grid").classList.toggle("active");
        companiesContainer.classList = "list";
    } else {
        while (target.nodeName !== "BUTTON") {
            target = target.parentNode;
        }
        
        handleViewOptionsClick(target);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const viewOptions = document.querySelectorAll("#options>button");

    viewOptions.forEach(option => {
        option.addEventListener("click", event => handleViewOptionsClick(event.target));
    });

    getCompaniesData(url);

});

async function getCompaniesData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch companies');
        let data = await response.json();
        console.table(data);
        displayCompanies(data);
        
    } catch (error) {
        console.error(error);
        companiesContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}
