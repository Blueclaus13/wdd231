import {hamburguer }from './utils.mjs';
hamburguer();

const membershipContainer = document.querySelector("#membership-cards");
const membershipDetailsModal = document.getElementById('membership-details');
const timestamp = document.getElementById("timestamp");
const membershipTypes = {
    memberships: [
        {
            "type": "Non-Profit",
            "description": "NP Membership is for non profit organizations and there is no fee. This members has access for networking meetings, founding stand ups, and charity events.",
            "info": "No Benefits",
            "cost": "No cost",
            "benefits": ["Networking meetings", "Founding Stand ups", "Charity Events"], 
            "membership_level": 4,
        },
        {
            "type": "Gold",
            "description": "Gold membership is ideal for businesses looking to elevate their brand presence, actively participate in shaping local business policies, and tap into premium networking channels. ",
            "info": "All Benefits",
            "cost": "$300 per Month",
            "benefits": ["Business Listing with Priority Placemen on Chamber's directory", "Logo Display on the chamber’s website, newsletter, and event programs", "Spotlight Opportunities", "Advertising Discounts", "Silver and Broze benefinits included"], 
            "membership_level": 1,
        },
        {
            "type": "Silver",
            "description": "Silver Membership is great for businesses that want to build connections, gain visibility, and stay informed about local business developments. It’s ideal for those looking to balance value with budget",
            "info": "Enhanced Benefits",
            "cost": "$150 per Month",
            "benefits": ["Standard placement without logo", "General networking events only", "Basic promotion in select publications", "Moderate discounts"], 
            "membership_level": 2,
        },
        {
            "type": "Bronze",
            "description": "Bronze Membership is a great starting point for businesses looking to connect with the local community, gain basic visibility, and access useful resources without a large financial commitment. It offers enough value to benefit small enterprises and sole proprietors",
            "info": "Basic Benefits",
            "cost": "$100 per Month",
            "benefits": ["Basic listing (name only)", "Standard events only", "General support without direct influence", "Basic discounts"], 
            "membership_level": 3,
        }
    ],
    init: function() {
        this.displayByMembershipCards();
    },
    displayByMembershipCards: function(){
        renderCards(this.memberships);
    },
    displayCourseDetails: function(membership){
    
        membershipDetailsModal.innerHTML = "";
        const modalTitle = document.createElement("h2");
        const description = document.createElement("p");
        const cost = document.createElement("p");
        const benefinits = document.createElement("ul");
        const benefinitsTag = document.createElement("p");
        const button = document.createElement("button");

        modalTitle.innerHTML = `${membership.type} Membership`;
        description.textContent = membership.description;
        cost.innerHTML = `<strong>Cost</strong>: ${membership.cost}`;
        benefinitsTag.innerHTML = `<strong>Benefits</strong>:`;
        membership.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefinits.appendChild(li);
        })
        button.textContent = "Close"
        button.id = "closeModal";
        membershipDetailsModal.appendChild(modalTitle);
        membershipDetailsModal.appendChild(description);
        membershipDetailsModal.appendChild(cost);
        membershipDetailsModal.appendChild(benefinitsTag);
        membershipDetailsModal.appendChild(benefinits);
        membershipDetailsModal.appendChild(button);
        
        membershipDetailsModal.showModal();
        const closeModal = document.querySelector("#closeModal");
        closeModal.addEventListener("click", ()=>{
            membershipDetailsModal.close();
        });
    }
};

const renderCards = (memberships) => {

    memberships.forEach((membership) => {
        let card = document.createElement("div");
        let type = document.createElement("h2");
        let benefit_info = document.createElement("p");
        let more = document.createElement("button");
        
        type.innerHTML = `${membership.type} Membership`;
        benefit_info.innerHTML = `${membership.info}`;
        more.textContent = "Know More";
        more.classList.add("open-modal");
        card.classList.add("membership-card");

        card.appendChild(type);
        card.appendChild(benefit_info);
        card.appendChild(more);
        if(membership.type == "Gold"){
            card.style.backgroundColor = "#ffd700";
        }else if(membership.type == "Silver"){
            card.style.backgroundColor = "#c0c0c0";
        }else if(membership.type == "Bronze"){
            card.style.backgroundColor = "#cba874";
        }else{
            card.style.backgroundColor = "#69140E";
            type.style.color = "#ffff";
            benefit_info.style.color = "#ffff";
        }

        membershipContainer.appendChild(card);
        more.addEventListener("click", ()=>{
            membershipTypes.displayCourseDetails(membership);
        });
        
    });
  };

  membershipTypes.init();
  timestamp.setAttribute('value', new Date().toDateString());

