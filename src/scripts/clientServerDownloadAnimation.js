import { state, devices } from "../app";

export function clientServerDownloadAnimation() {
  devices.forEach((regionDevices, index) => {
    let clientSevrer = '';
    
    Object.entries(state.places).forEach((place) => {
      if (place.includes('serverClient')) {
        clientSevrer = place[0];
      }
    });

    const time = state.latency[clientSevrer];

    for (const device of regionDevices.children) {
      if (!device.className.includes('disabled')) {
        device.children[0].classList.toggle("disabled");
        
        regionDevices.style.setProperty('--duration',
         `${(time[index] / 60) + 1}s`);
        setTimeout(() => device.children[0].classList.toggle("disabled"), 8000);
      }
    }
  });
}