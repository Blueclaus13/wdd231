const currentUrl = window.location.href;



//Divide the url into two halves
const everything = currentUrl.split('?');


//Grab just the second half
let formData = everything[1].split('&');


function show(cup){

    formData.forEach((element)=>{

        if(element.startsWith(cup)){
            result =element.split('=')[1].replace('%40', '@');
            
        }
    });
    return result;
}

const showInfor = document.querySelector('#results');
showInfor.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple</p>
<p> Your phone: ${show("phone")}</p>
<p> Your Email: <a href="${show("email")}">${show("email")}</a></p>

`;