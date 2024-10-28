
const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
date.innerHTML= `Last modification ${today.toLocaleString('en-US', { timeZoneName: 'short' })}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
	const path = window.location.pathname;
	if (path.includes("review.html")) {
	  getVisits += 1;
	  localStorage.setItem("reviews", getVisits);
	  visits.textContent = getVisits;
	}
  });