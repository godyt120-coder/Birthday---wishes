function celebrate(){

    // 🎉 Confetti
    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML=Math.random()>0.5?"🎉":"✨";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-30px";
        confetti.style.fontSize=(16+Math.random()*20)+"px";
        confetti.style.transition="4s linear";
        confetti.style.pointerEvents="none";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.style.top="110vh";
        },50);

        setTimeout(()=>{
            confetti.remove();
        },4500);

    }

    // 💖 Hearts
    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="-20px";
        heart.style.fontSize="24px";
        heart.style.transition="5s linear";
        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.bottom="110vh";
        },50);

        setTimeout(()=>{
            heart.remove();
        },5500);

    }

    alert("🎂 Happy Birthday! Wishing you endless happiness! ❤️");
}
function magicEffects(){

    const icons=["✨","🌸","🎈","💖","⭐","🎊"];

    for(let i=0;i<50;i++){

        let e=document.createElement("div");

        e.className="effect";

        e.innerHTML=icons[Math.floor(Math.random()*icons.length)];

        e.style.left=Math.random()*100+"vw";

        e.style.bottom="-30px";

        e.style.animationDuration=(4+Math.random()*4)+"s";

        document.getElementById("effects").appendChild(e);

        setTimeout(()=>{
            e.remove();
        },8000);

    }

}
