let blown = 0;

function blow(candle){

    if(candle.classList.contains("off")) return;

    candle.classList.add("off");

    blown++;

    if(blown === 5){

        setTimeout(()=>{

            alert("✨ Make a Wish! 🎂");

            document.getElementById("cutBtn").style.display="inline-block";

        },500);

    }

}
