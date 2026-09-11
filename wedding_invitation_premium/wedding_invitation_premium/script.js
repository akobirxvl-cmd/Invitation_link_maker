window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hide");
  }, 1000);
});

function openInvite() {
  const box = document.querySelector(".envelope-box");
  const music = document.getElementById("bgMusic");

  box.classList.add("open");

  music.play().catch(() => {
    console.log("Музыка запустится после нажатия на кнопку");
  });

  document.querySelector(".music-btn").style.display = "block";

  setTimeout(() => {
    document.getElementById("cover").style.display = "none";
    document.getElementById("invite").style.display = "block";
    startTimer();
    revealOnScroll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1700);
}

function startTimer() {
  const weddingDate = new Date("2026-07-22T19:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    let distance = weddingDate - now;

    if (distance < 0) {
      distance = 0;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    const timer = document.getElementById("timer");
    timer.innerHTML = `
      <div><b>${days}</b><span>дней</span></div>
      <div><b>${hours}</b><span>часов</span></div>
      <div><b>${minutes}</b><span>минут</span></div>
      <div><b>${seconds}</b><span>секунд</span></div>
    `;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.18
  });

  items.forEach((item) => observer.observe(item));
}

function confirmGuest() {
  alert("Спасибо! Мы будем рады видеть вас на нашей свадьбе ♥");
}
function toggleMusic() {
    const music = document.getElementById("bgMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}