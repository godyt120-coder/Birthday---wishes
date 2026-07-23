let blown = 0;

function blow(candle){

if(candle.classList.contains("off")) return;

candle.classList.add("off");

blown++;

if(blown===5){

document.getElementById("wishMessage").style.display="block";

document.getElementById("cutBtn").style.display="inline-block";

startConfetti();

}

}

function startConfetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.innerHTML=Math.random()>0.5?"🎉":"✨";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(16+Math.random()*18)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

},50);

setTimeout(()=>{

c.remove();

},4500);

}

}
function cutCake(){

document.querySelector(".cake").classList.add("cut");

const layers=document.querySelectorAll(".layer");

layers[0].classList.add("left");

layers[1].classList.add("right");

layers[2].classList.add("left");

setTimeout(()=>{

startConfetti();

alert("🎉 Happy Birthday! 🎂");

},1200);

}
