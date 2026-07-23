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
  function petals(){

    for(let i=0;i<30;i++){

        let p=document.createElement("div");

        p.className="petal";

        p.innerHTML=Math.random()>0.5?"🌸":"🌹";

        p.style.left=Math.random()*100+"vw";

        p.style.animationDuration=(4+Math.random()*4)+"s";

        document.getElementById("petals").appendChild(p);

        setTimeout(()=>{

            p.remove();

        },8000);

    }

  }

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
petals();
  balloon();
document.getElementById("celebration").style.display="block";

},1200);
function balloons(){

    for(let i=0;i<15;i++){

        let b=document.createElement("div");

        b.className="balloon";

        const list=["🎈","🎈","🎈","🎀"];

        b.innerHTML=list[Math.floor(Math.random()*list.length)];

        b.style.left=Math.random()*100+"vw";

        b.style.animationDuration=(5+Math.random()*4)+"s";

        document.getElementById("balloons").appendChild(b);

        setTimeout(()=>{
            b.remove();
        },9000);
    }

}
