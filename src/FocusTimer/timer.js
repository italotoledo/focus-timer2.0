import state from "./state.js";
import * as elements from "./elements.js";

export function countdown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.minutes.textContent);

  seconds--;

  updateDisplay(minutes, seconds);

  setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}
