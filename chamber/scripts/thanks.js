import {hamburguer }from './utils.mjs';
hamburguer();
const memberTypeElement = document.querySelector("#memberType");
const icon = document.querySelector("#icon img");
const currentUrl = window.location.href;


//Divide the url into two halves
const everything = currentUrl.split('?');


//Grab just the second half
let formData = everything[1].split('&');


function show(cup){
    let result = "";
    formData.forEach((element)=>{

        if(element.startsWith(cup)){
          result =element.split('=')[1].replace('%40', '@').split("+").join(" ");
        }
    });
    return result;
}
function capitalizeFirstLetter(str) {
    str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const showInfor = document.querySelector('#results');
memberTypeElement.innerHTML = `${show("membership")} Membership`;
showInfor.innerHTML = `
<h2>Submission details:</h2>
<p>${capitalizeFirstLetter(show("first"))} ${capitalizeFirstLetter(show("last"))} your application was sent </p>
<p><strong>Email</strong>: ${show("email")}</p>
<p><strong>Cell phone</strong>: ${show("phone")}</p>
<p><strong>Organizational Title</strong>: ${show("title")}</p>
<p><strong>Description</strong>: ${show("description")}</p>
<p><strong>Submission Date</strong>: ${show("timestamp")}</p>
`;

if(show("membership") == "Gold"){
    memberTypeElement.style.textDecorationColor = "#ffd700";
    icon.style.backgroundColor = "#ffd700";
}else if(show("membership") == "Silver"){
    memberTypeElement.style.textDecorationColor = "#c0c0c0";
    icon.style.backgroundColor = "#c0c0c0";
}else if(show("membership") == "Bronze"){
    memberTypeElement.style.textDecorationColor = "#cba874";
    icon.style.backgroundColor = "#cba874";
}else{
    memberTypeElement.style.textDecorationColor = "#69140E";
}