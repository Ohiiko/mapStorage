import { placeServer } from "../app";

export function showPlaceServer() {
  placeServer.forEach((placeServerElement) => {
    placeServerElement.classList.toggle("disabled");
  });
}