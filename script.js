function start(){

const btn=document.querySelector(".magic-btn");

btn.innerHTML="🎉 Opening Surprise...";

btn.style.transform="scale(0.95)";

setTimeout(()=>{
btn.style.transform="scale(1.1)";
},150);

setTimeout(()=>{
btn.style.transform="scale(1)";
},300);

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{
window.location.href="cake.html";
},1000);

}
