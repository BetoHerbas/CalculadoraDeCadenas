import sumarCadena from "./calculadoraCadenas.js";

describe("Sumar cadena", () => {
  it("devuelve 0 como total de la suma cuando la cadena es vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });
  it("devuelve 3 como total de la suma cuando la cadena es '3'", () => {
    expect(sumarCadena("3")).toEqual(3);
  });
  it("devuelve el total de la suma de 2 números separados por ','", () => {
    expect(sumarCadena("1,2")).toEqual(3);
  });
  it("devuelve el total de la suma de varios números separados por ','", () => {
    expect(sumarCadena("1,2,3,4,5")).toEqual(15);
  });
});
