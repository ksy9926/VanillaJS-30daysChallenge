function onKeyDown(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
}

function onTransitionEnd(event) {
  if (event.propertyName !== "transform") {
    return;
  } else {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", onKeyDown);

keys.forEach((key) => key.addEventListener("transitionend", onTransitionEnd));
