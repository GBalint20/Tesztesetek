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
      a: -15,
      b: 9,
      vart: 3,
      tesztesetNeve: "3. Teszteset: a és b nem relatív prím."
    },
    {
      a: 10,
      b: 0,
      vart: 0,
      tesztesetNeve: "4. Teszteset: a és b nem relatív prím."
    },
    {
      a: 0,
      b: 10,
      vart: 0,
      tesztesetNeve: "5. Teszteset: a és b nem relatív prím." 
    },
    {
      a: 15,
      b: 9,
      vart: 3,
      tesztesetNeve: "6. Teszteset: a és b nem relatív prím."
    },
    {
      a: 6,
      b: 3,
      vart: 3,
      tesztesetNeve: "7. Teszteset: a és b nem relatív prím."
    },
    {
      a: 9,
      b: 15,
      vart: 3,
      tesztesetNeve: "8. Teszteset: a és b nem relatív prím."
    },
    {
      a: 7,
      b: 10,
      vart: 1,
      tesztesetNeve: "9. Teszteset: a és b nem relatív prím."
    },
    {
      a: 15,
      b: 8,
      vart: 1,
      tesztesetNeve: "10. Teszteset: a és b nem relatív prím."
    },
    {
      a: 5,
      b: 5,
      vart: 5,
      tesztesetNeve: "11. Teszteset: a és b nem relatív prím."
    },
    {
      a: 8,
      b: 8,
      vart: 8,
      tesztesetNeve: "12. Teszteset: a és b nem relatív prím."
    },
  ];

  for (let index = 0; index < tesztObjLista.length; index++) {
    let a = tesztObjLista[index].a;
    let b = tesztObjLista[index].b;
    let vart = tesztObjLista[index].vart;
    let kapott = lnko(a, b);

    console.log(`${index+1}. teszteset - a és b nem relatív prímek`)
    console.log(`a: ${a} b: ${b} várt: ${vart} kapott: ${kapott}`)

    console.assert(
      vart === kapott,
      "%o",
      `a = ${a}, b = ${b}, vart = ${kapott}`,
      `${tesztObjLista[index].tesztesetNeve}`
    );
    console.log(``)
  }
}
