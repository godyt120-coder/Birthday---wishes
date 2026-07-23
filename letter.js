const text = `Happy Birthday! 🎉

Wishing you a day filled with happiness, laughter, love, and unforgettable memories.

May all your dreams come true and may this year bring you endless success, good health, and beautiful moments.

Keep smiling, keep shining, and never stop being amazing.

Happy Birthday! ❤️🎂`;

let started = false;

function openLetter(){

    if(started) return;

    started = true;

    document.querySelector(".envelope").classList.add("open");
    floatingHearts();
    fallingPetals();
    const message = document.getElementById("message");

    message.innerHTML = "";

    let i = 0;

    function type(){

        if(i < text.length){

            message.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,35);

        }else{

            document.getElementById("nextGallery").style.display="inline-block";

        }

    }

    setTimeout(type,900);

}
function floatingHearts(){

    for(let i=0;i<25;i++){

        let h=document.createElement("div");

        h.className="heart";

        h.innerHTML="💖";

        h.style.left=Math.random()*100+"vw";

        h.style.animationDuration=(4+Math.random()*3)+"s";

        document.getElementById("hearts").appendChild(h);

        setTimeout(()=>{
            h.remove();
        },7000);

    }

}
function fallingPetals(){

    for(let i=0;i<30;i++){

        const p=document.createElement("div");

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
function goldenSparkles(){

    for(let i=0;i<40;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.innerHTML="✨";

        s.style.left=Math.random()*100+"vw";
        s.style.top=Math.random()*100+"vh";

        document.getElementById("sparkles").appendChild(s);

        setTimeout(()=>{
            s.remove();
        },2000);
    }

            }
