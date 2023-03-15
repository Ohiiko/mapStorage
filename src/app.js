import { handleCheckedClient } from "./scripts/clients";
import { hiddenClient } from "./scripts/clients";
import { handleCheckedServer, startAnimation } from "./scripts/server";

export const state = {
  "regions": {
    "northAmerica": 0,
    "europe": 0,
    "asia": 0,
    "southAmerica": 0,
    "oceania": 0,
  },
  "places": {
    "westUsa": '',
    "eastUsa": '',
    "germany": '',
    "singapore": '',
  },
  "latency": {
    "westUsa": [33, 165, 167, 209, 194],
    "eastUsa": [41, 99, 131, 285, 229],
    "germany": [119, 198, 31, 212, 241],
    "singapore": [370, 206, 201, 62, 98],
  },
};

export const clients = document.querySelectorAll('.clients');
export const devices = document.querySelectorAll('.devices');
export const lines = document.querySelectorAll('.lines');
export const placeServer = document.querySelectorAll('.placeServer');
export const startChengeServer = document.querySelector('.choose__region');
export const btnStartAnimation = document.querySelector('.choose__server');

btnStartAnimation.addEventListener('click', () => startAnimation());

startChengeServer.addEventListener('click', (e) => {
  hiddenClient();
  e.currentTarget.classList.toggle("disabled");
  e.currentTarget.nextElementSibling.classList.toggle("disabled");
});

clients.forEach(client => {
client.addEventListener('click', () => handleCheckedClient(client));
});

placeServer.forEach(place => {
  place.addEventListener('click', () => handleCheckedServer(place));
});