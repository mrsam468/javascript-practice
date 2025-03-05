const btn = document.querySelector('.button');
const body= document.querySelector(".body");
const paragraph = document.getElementsByTagName("p")
btn.addEventListener("click",onclick);
function onclick(e){
body.classList.add('john');
// paragraph.style
btn.classList.add("james");
btn.innerHTML="click to change to light mode"
}

