const btn = document.querySelector("button");
const body = document.querySelector('body');
btn.addEventListener("click",onclick);
function onclick(e){
if(btn.value===''){
    body.style.background='black'
    body.style.color='white'
    btn.style.background='white'
    btn.style.color='black';
    btn.value='hi'
    // console.log('hello')
    btn.innerHTML="click to change to dark mode"
}else{
    btn.innerHTML='click to change to light mode'
    body.style.background="white"
    body.style.color='black'
    btn.style.background="black"
    btn.style.color='white'
    btn.value=""
    // console.log("hi");
    
}
}
