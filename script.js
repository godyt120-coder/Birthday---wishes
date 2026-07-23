const startBtn = document.getElementById("startBtn");

// Small click animation
startBtn.addEventListener("click", () => {

    startBtn.style.transform = "scale(0.95)";
    startBtn.innerHTML = "🎉 Loading Surprise...";

    setTimeout(() => {
        window.location.href = "cake.html";
    }, 1200);

});

// Floating sparkles
for(let i = 0; i < 30; i++){

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (12 + Math.random() * 20) + "px";
    sparkle.style.opacity = "0.7";
    sparkle.style.pointerEvents = "none";
    sparkle.style.animation = `float ${3 + Math.random() * 4}s linear infinite`;

    document.body.appendChild(sparkle);
}

// Create animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes float{
    0%{
