import { lnko } from "./main.js";

export function lnko_teszt() {
  let tesztObjLista = [
    {
      a: 15,
      b: 9,
      vart: 3,
      tesztesetNeve: "1. Teszteset: a és b nem relatív prím.",
      //console.log(`1. Teszteset, a és b nem relatív prímek.`);
      //console.log(`a: ${a} b: ${b} várt: ${vart} kapott: ${kapott}`);
      //console.log(`Eredmény: ${vart === kapott}`);
    },
    {
      a: 6,
      b: 3,
      vart: 3,
      tesztesetNeve: "2. Teszteset: a és b nem prímek, a többszöröse b-nek.",
    },
    {
      /*
      a: 
      b: 
      vart: 
      tesztesetNeve:
      */
    },
  ];

  for (let index = 0; index < tesztObjLista.length; index++) {
    let a = tesztObjLista[index].a;
    let b = tesztObjLista[index].b;
    let vart = tesztObjLista[index].vart;
    let kapott = lnko(a, b);
    console.assert(
      vart === kapott,
      "%o",
      `a = ${a}, b = ${b}, vart = ${kapott}`,
      `${tesztObjLista[index].tesztesetNeve}`
    );
  }
}
