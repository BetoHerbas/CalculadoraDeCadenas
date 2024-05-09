import sumarCadena from "./calculadoraCadenas.js";

describe("Sumar cadena", () => {
  it("devuelve 0 como total de la suma cuando la cadena es vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });
});
