import { state, btnStartAnimation } from "../app";
import { showClientServerLines } from "./clientServerLines";
import { showServerByteCloudLines } from "./serverByteCloudLines";

export function handleCheckedServer(place) {
  place.classList.toggle('placeServer');
  
  if (Object.values(state.places).every((value) => value === '')) {
    state.places[place.className] = 'serverClient';
  } else {
    state.places[place.className] = 'serverByteCloud';
  }
  place.classList.toggle(state.places[place.className]);

  if (Object.values(state.places).filter(
    (value) => value === '').length === 1) {
    btnStartAnimation.children[0].classList.toggle("disabled");
  }

  if (Object.values(state.places).every((value) => value !== '')) {
    startAnimation();
  }
  
}

export function startAnimation() {
  btnStartAnimation.classList.toggle("disabled");
  showServerByteCloudLines();
    setTimeout(() => showClientServerLines(), 6000);
}