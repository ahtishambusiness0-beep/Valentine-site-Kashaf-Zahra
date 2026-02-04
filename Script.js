const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainText = document.getElementById("mainText");
const subText = document.getElementById("subText");
const noMessage = document.getElementById("noMessage");
const petalRain = document.getElementById("petalRain");

let noClickCount = 0;

const noMessages = [
  "No is a little shy 🙈",
  "But I love you 🥺💖",
  "Don't do this to my heart 😭",
  "Come on please 😽",
  "You're making me blush 😳",
  "Just say yes already 💘",
  "My heart is waiting 🥹",
  "Stop teasing me 😭💗",
  "You're my favorite person 💞",
  "Ok ok... last chance 😩💘"
];

function moveNoButton() {
  const moveX = Math.floor(Math.random() * 120) - 60; // small movement
  const moveY = Math.floor(Math.random() * 90) - 45;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + noClickCount * 0.06})`;
}

noBtn.addEventListener("click", () => {
  noClickCount++;

  // message change
  let msgIndex = noClickCount % noMessages.length;
  noMessage.textContent = noMessages[msgIndex];

  // movement
  moveNoButton();

  // gentle growth (visible but not crazy)
  if (noClickCount <= 10) {
    noBtn.style.fontSize = `${1 + noClickCount * 0.05}rem`;
    noBtn.style.padding = `${12 + noClickCount}px ${22 + noClickCount}px`;
  }
});

yesBtn.addEventListener("click", () => {
  mainText.style.display = "none";
  subText.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  noMessage.style.display = "none";

  const card = document.getElementById("card");

  const finalMsg = document.createElement("div");
  finalMsg.classList.add("final-message");
  finalMsg.innerHTML = `
    I love you sooo much 
    <span class="highlight-name">Kashaf Zahra 🎀</span>
    Thank you for being in my life 😽🩷 <br>
    You mean the world to me 💖 <br>
    Forever yours 💘
  `;
  card.appendChild(finalMsg);

  startPetalRain();
});

function startPetalRain() {
  setInterval(() => {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 3 + Math.random() * 3 + "s";
    petal.style.opacity = 0.5 + Math.random() * 0.5;

    petalRain.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 6000);

  }, 150);
}