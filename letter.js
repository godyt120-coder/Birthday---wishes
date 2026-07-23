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
