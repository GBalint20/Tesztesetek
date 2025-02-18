import { lnko_teszt } from "./teszt.js";

export function lnko(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (a === 0 || b === 0) {
    return 0;
  }
  
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
