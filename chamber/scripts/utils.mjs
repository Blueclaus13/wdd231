export function clearChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};


export function hamburguer(){
  const mainNav = document.querySelector("#animateme");
  const hamButton = document.querySelector("#menu");
  hamButton.addEventListener('click', ()=>{
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});
}