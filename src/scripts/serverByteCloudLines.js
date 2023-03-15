import { state, lines, placeServer } from "../app";

export function showServerByteCloudLines() {
  if (!Object.entries(state.places).includes('')) {
    lines.forEach((line) => {
      const arrShowLines = determineLinesShow(line);

      for (let item = 0; item < arrShowLines.length; item++) {
        const linesChildren = arrShowLines[item].children;

        for(const index in linesChildren) {
          Object.keys(state.regions).forEach(region => {
            if (index < state.regions[region]
              && linesChildren[index].className.includes(region)) {
                linesChildren[index].classList.toggle("disabled");

              setTimeout(() => (
                linesChildren[index].classList.toggle("disabled"))
                , 6000);
            }
          });
        }
      }
    });
  }
}

function determineLinesShow(line){
  let ArrLines = [];

  Object.keys(state.places).forEach(place => {
    if (line.className.includes(place)) {
      if (!Object.values(state.places).includes('')) {
        if (place === 'singapore') {
          ArrLines = [line.children[0], line.children[1]];
        } else {
          ArrLines = [line.children[0]];
        }
      } else {
        const arrValues = getServerNotSelected(line);

        if (place !== arrValues[2]) {
          if (place === arrValues[1]) {
            ArrLines = arrValues[0];
          } else {
            if (place === 'singapore' && arrValues[2] !== 'singapore') {
              ArrLines = [line.children[0], line.children[1]];
            } else {
              ArrLines = [line.children[0]];
            }
          }
        }
      }
    }
  });
  
  return ArrLines;
}

function getServerNotSelected(line) {
  let ServerNotSelected;

  Object.entries(state.places).forEach((arrEntries) => {
    if (arrEntries.includes('')) {
      ServerNotSelected = arrEntries[0];

      placeServer.forEach(place => {
        if (place.className.includes(ServerNotSelected)) {
          place.classList.add('disabled');
        }
      });
    }
  });

  switch (ServerNotSelected) {
    case "westUsa":
      return [[line.children[0], line.children[1]], "eastUsa",
       ServerNotSelected];

    case "eastUsa":
      return [[line.children[0], line.children[1]],
       "westUsa", ServerNotSelected];

    case "germany":
      return [[line.children[0], line.children[2]],
       "eastUsa", ServerNotSelected];

    case "singapore":
      return [[line.children[0], line.children[1], line.children[2]],
       "germany", ServerNotSelected];

    default:
      return [line.children[0]];
    }
}
