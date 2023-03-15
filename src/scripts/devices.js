import { devices } from "../app";

export function showDevices(amountOfDevices, region) {
    devices.forEach((device) => {
    if (device.className.includes(region)){
      for(const i in device.children) {
        if (i < amountOfDevices) {
          device.children[i].classList.toggle("disabled");
        }
      }
    }
  });
}
