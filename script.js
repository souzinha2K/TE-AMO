document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date("2021-04-05T00:00:00"); // Data correta do início do namoro
    const today = new Date();
    
   

    // Função para calcular o tempo desde o início do namoro
    function updateTimer() {
        const now = new Date();
        

        const elapsedTime = now - startDate;

        const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365)); // Anos completos
        const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)); // Dias após os anos completos
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas após os dias completos
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)); // Minutos após as horas completas
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); // Segundos após os minutos completos

        // Atualiza o cronômetro na página
        document.getElementById("timer").innerText = `${years} ano(s), ${days} dia(s), ${hours} hora(s), ${minutes} minuto(s), ${seconds} segundo(s)`;
    }

    // Ajuste do cálculo de dias: 
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Calcular corretamente a diferença em dias
    document.getElementById("days-together").innerText = `${diffDays} Dias juntos`;

    // Atualiza o cronômetro a cada segundo
    setInterval(updateTimer, 1000);

    // Inicializa o cronômetro na primeira vez
    updateTimer();

    // Função para criar os corações animados
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.querySelector(".heart-container").appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
});

// Função para criar os corações animados
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#10084;"; // Código do corAação ♥
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.querySelector(".heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);

const buttons = document.querySelectorAll(".toggle-text-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.previousElementSibling;
    text.classList.toggle("show-text");
    btn.textContent = text.classList.contains("show-text") ? "Ver menos" : "Ver mais";
  });
});
