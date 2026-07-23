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
  sparkles();
  showCats();
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
function sparkles(){

    for(let i=0;i<40;i++){

        let s=document.createElement("div");

        s.className="sparkle";

        s.innerHTML="✨";

        s.style.left=Math.random()*100+"vw";
        s.style.top=Math.random()*100+"vh";

        s.style.animationDelay=(Math.random()*2)+"s";

        document.getElementById("sparkles").appendChild(s);

        setTimeout(()=>{
            s.remove();
        },4000);

    }

}
function showCats(){

    document.querySelectorAll(".cat").forEach(cat=>{
        cat.classList.add("show");
    });

}
const music = document.getElementById("bgMusic");

function toggleMusic(){

    if(music.paused){
        music.play();
        document.getElementById("musicBtn").innerHTML="🔊 Music On";
    }else{
        music.pause();
        document.getElementById("musicBtn").innerHTML="🎵 Play Music";
    }

}
