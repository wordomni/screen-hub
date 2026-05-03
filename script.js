function setColor(color) {
  document.getElementById("screen").style.background = color;
}

/* Fullscreen toggle */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

/* Flicker mode (for pixel fixing) */
let flickerInterval;

function startFlicker() {
  const colors = ["red", "green", "blue", "white", "black"];
  let i = 0;

  flickerInterval = setInterval(() => {
    document.getElementById("screen").style.background = colors[i % colors.length];
    i++;
  }, 100);
}

function stopFlicker() {
  clearInterval(flickerInterval);
}

/* Gradient mode */
function setGradient() {
  document.getElementById("screen").style.background =
    "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
}