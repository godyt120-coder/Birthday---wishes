const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "cake.html";
    }, 1000);

});
