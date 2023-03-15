import { state, lines } from "../app";
import { clientServerDownloadAnimation } from "./clientServerDownloadAnimation";

export function showClientServerLines(){
  clientServerDownloadAnimation();

  Object.entries(state.places).forEach((i) => {
    if (i.includes('serverClient')) {
      Object.keys(state.regions).forEach(region => {
        lines.forEach((line) => {
          if (line.className.includes(i[0])) {
            for(const elements of line.children) {
              if(elements.className.includes(region)) {
                for(const index in elements.children) {
                  if (index < state.regions[region]) {
                    elements.children[index].classList.toggle("disabled");

                    setTimeout(() => (
                      elements.children[index].classList.toggle("disabled")),
                       8000);
                  }
                }
              }
            }
          }
        });
      });
    }
  });
}