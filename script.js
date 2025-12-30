// PERSONALIZE HERE
const name = "Baby 💖";
const message = "This is just a small surprise for you ❤️";

document.getElementById("name").innerText = name;

// TYPEWRITER EFFECT
let i = 0;
const textElement = document.getElementById("typeText");

function typeEffect() {
  if (i < message.length) {
    textElement.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// MUSIC TOGGLE
let playing = false;
function toggleMusic() {
  const music = document.getElementById("music");
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}


// NEXT PAGE
function nextPage() {
  window.location.href = "page2.html";
}
// MUSIC CONTINUOUS ACROSS PAGES
const bgMusic = document.getElementById("music");

// restore music time and play if it was playing
window.addEventListener("load", () => {
  const savedTime = localStorage.getItem("musicTime");
  const wasPlaying = localStorage.getItem("musicPlaying");

  if (savedTime) bgMusic.currentTime = parseFloat(savedTime);

  if (wasPlaying === "true") {
    bgMusic.play().catch(() => {});
    playing = true;
  }
});

// save time before leaving page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("musicTime", bgMusic.currentTime);
  localStorage.setItem("musicPlaying", !bgMusic.paused);
});

// allow music to start after first interaction (required by browser)
document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
    playing = true;
  }
}, { once: true });


