import { lnko_teszt } from "./teszt.js";

export function lnko(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

// console.log(lnko(15, 8));
lnko_teszt();
