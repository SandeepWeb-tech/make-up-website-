const menu = document.getElementById("menu");
const cancel = document.getElementById("cancel");

menu.addEventListener("click" , open)
cancel.addEventListener("click" , close)

function open(){
    document.getElementById("nav").style.display="block";
    document.getElementById("menu").style.display="none";
    document.getElementById("cancel").style.display="block";
}
function close(){
    document.getElementById("nav").style.display="none";
    document.getElementById("nav").classList.add("boomi");
    document.getElementById("menu").style.display="block";
    document.getElementById("cancel").style.display="none";
}
