import { state, clients, startChengeServer, btnStartAnimation } from "../app";
import { showDevices } from "./devices";
import { showPlaceServer } from "./placeServer";

export function handleCheckedClient(client){
  const region = client.offsetParent.className;
  const radio = client.querySelectorAll('input[name="client"]');

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      state.regions[region] = +radio[i].value;
      client.classList.toggle("disabled");
      showDevices(state.regions[region], region);

      if (Object.values(state.regions).filter(
        (value) => value === 0).length === 3) {
        startChengeServer.children[0].classList.toggle("disabled");
      }

      if (Object.values(state.regions).every((value) => value > 0)) {
        startChengeServer.classList.toggle("disabled");
        btnStartAnimation.classList.toggle("disabled");
        showPlaceServer();
      }
    }
  }
}

export function hiddenClient() {
  clients.forEach(client => {
    if (!client.className.includes("disabled")) {
      client.classList.add("disabled");
    }
    });
  showPlaceServer();
}