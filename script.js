const toast = document.getElementById("toast");

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const value = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast("IP copiado: " + value);
    } catch {
      showToast("IP: " + value);
    }
  });
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav nav").classList.remove("open"));
});

document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => item.classList.toggle("open"));
});

document.querySelectorAll(".shop-btn").forEach(btn => {
  btn.addEventListener("click", () => showToast("Configure o checkout da sua loja primeiro."));
});

// Simulação visual de jogadores online.
const players = document.getElementById("players");
setInterval(() => {
  const base = 1284;
  players.textContent = (base + Math.floor(Math.random() * 35) - 17).toLocaleString("pt-BR");
}, 5000);
