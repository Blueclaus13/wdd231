export function clearChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };
  
  
  export function hamburguer(){
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav");

    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    }); 
  };

export function footer(){
    const year = document.querySelector("#currentyear");
    const date = document.querySelector("#lastModified");
    const today = new Date();

    year.innerHTML = `${today.getFullYear()}`;
    date.innerHTML= `Last modification ${today.toLocaleString('en-US', { timeZoneName: 'short' })}`;
}