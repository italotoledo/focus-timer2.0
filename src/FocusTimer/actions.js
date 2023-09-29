import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import { minutes, seconds } from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  state.minutes = 25;
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function addMinutes() {
  state.minutes = Number(minutes.textContent) + 5;
  timer.updateDisplay();
}

export function subMinutes() {
  if (Number(minutes.textContent) <= 5) {
    return;
  }
  state.minutes = Number(minutes.textContent) - 5;
  timer.updateDisplay();
}

// SONGS

export function florestSong() {
  state.isMute = !document
    .getElementById("florestSong")
    .classList.toggle("button-active");
  if (state.isMute) {
    sounds.florestSong.pause();
  } else {
    document.getElementById("rainSong").classList.remove("button-active");
    sounds.rainSong.pause();

    document.getElementById("cafeteriaSong").classList.remove("button-active");
    sounds.cafeteriaSong.pause();

    document.getElementById("fireplaceSong").classList.remove("button-active");
    sounds.fireplaceSong.pause();

    sounds.florestSong.play();
  }
}

export function rainSong() {
  state.isMute = !document
    .getElementById("rainSong")
    .classList.toggle("button-active");

  if (state.isMute) {
    sounds.rainSong.pause();
  } else {
    document.getElementById("florestSong").classList.remove("button-active");
    sounds.florestSong.pause();

    document.getElementById("cafeteriaSong").classList.remove("button-active");
    sounds.cafeteriaSong.pause();

    document.getElementById("fireplaceSong").classList.remove("button-active");
    sounds.fireplaceSong.pause();

    sounds.rainSong.play();
  }
}

export function cafeteriaSong() {
  state.isMute = !document
    .getElementById("cafeteriaSong")
    .classList.toggle("button-active");

  if (state.isMute) {
    sounds.cafeteriaSong.pause();
  } else {
    document.getElementById("florestSong").classList.remove("button-active");
    sounds.florestSong.pause();

    document.getElementById("rainSong").classList.remove("button-active");
    sounds.rainSong.pause();

    document.getElementById("fireplaceSong").classList.remove("button-active");
    sounds.fireplaceSong.pause();

    sounds.cafeteriaSong.play();
  }
}

export function fireplaceSong() {
  state.isMute = !document
    .getElementById("fireplaceSong")
    .classList.toggle("button-active");

  if (state.isMute) {
    sounds.fireplaceSong.pause();
  } else {
    document.getElementById("florestSong").classList.remove("button-active");
    sounds.florestSong.pause();

    document.getElementById("rainSong").classList.remove("button-active");
    sounds.rainSong.pause();

    document.getElementById("cafeteriaSong").classList.remove("button-active");
    sounds.cafeteriaSong.pause();

    sounds.fireplaceSong.play();
  }
}
