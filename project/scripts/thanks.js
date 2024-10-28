import {hamburguer,footer }from './utils.mjs';
hamburguer();
footer();

//Get URL
const currentUrl = window.location.href;

//Divide the url into two halves
const everything = currentUrl.split('?');

//Grab just the second half
let formData = everything[1].split('&');

function show(cup){
    let result = "";
    formData.forEach((element)=>{

        if(element.startsWith(cup)){
          result = element.split('=')[1].replace('%40', '@').split("+").join(" ");
        }
    });
    return result;
}

function amenities(){
    let result = "";
    formData.forEach((element)=>{

        if(element.endsWith("yes")){
          result += element.split('=')[0] + ", ";
        }
    });
    return result;
}

function interests(){
    let result = "";
    formData.forEach((element)=>{

        if(element.endsWith("want")){
          result += element.split('=')[0] + ", ";
        }
    });
    return result;
}

function capitalizeFirstLetter(str) {
    str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const showInfor = document.querySelector('#review');
  showInfor.innerHTML = `
<h2>Submission details:</h2>
<div id=submissionDetails>
    <p>${capitalizeFirstLetter(show("fname"))} ${capitalizeFirstLetter(show("lname"))} your request was sent </p>
    <p><strong>Email</strong>: ${show("email")}</p>
    <p><strong>Cell phone</strong>: ${show("phone")}</p>
    <p><strong>Preferred Destination</strong>: ${show("product")}</p>
    <p><strong>Departure Date</strong>: ${show("departureDate")}</p>
    <p><strong>Return Date</strong>: ${show("returnDate")}</p>
    <p><strong>Travelers</strong>: Adults ${show("adults")} Kids ${show("kids")}</p>
    <p><strong>Acomodation Type</strong>: ${show("acomodation-type")}</p>
    <p><strong>Room Type</strong>: ${show("roomtype")}</p>
    <p><strong>Amenities</strong>: ${amenities()}</p>
    <p><strong>Activities of Interest</strong>: ${interests()}</p>
    <p><strong>Submission Date</strong>: ${new Date().toDateString()}</p>
</div>
`;