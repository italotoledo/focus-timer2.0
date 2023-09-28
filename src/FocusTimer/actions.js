import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
}

export function addMinutes() {
  console.log("adicionar minutos");
}

export function subMinutes() {
  console.log("subtrair minutos");
}

// SONGS

export function florestSong() {
  state.isMute = !document
    .getElementById("florestSong")
    .classList.toggle("button-active");
}

export function rainSong() {
  state.isMute = !document
    .getElementById("rainSong")
    .classList.toggle("button-active");
}

export function cafeteriaSong() {
  state.isMute = !document
    .getElementById("cafeteriaSong")
    .classList.toggle("button-active");
}

export function fireplaceSong() {
  state.isMute = !document
    .getElementById("fireplaceSong")
    .classList.toggle("button-active");
}
