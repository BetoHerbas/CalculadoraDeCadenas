import addChain from "./calculadoraCadenas.js";

describe("Sumar cadena", () => {
  it("devuelve 0 como total de la suma cuando la cadena es vacia", () => {
    expect(addChain("")).toEqual(0);
  });
  it("devuelve 3 como total de la suma cuando la cadena es '3'", () => {
    expect(addChain("3")).toEqual(3);
  });
  it("devuelve el total de la suma de 2 números separados por ','", () => {
    expect(addChain("1,2")).toEqual(3);
  });
  it("devuelve el total de la suma de varios números separados por ','", () => {
    expect(addChain("1,2,3,4,5")).toEqual(15);
  });
  it("devuelve el total de la suma de varios números separados por ',' y '-'", () => {
    expect(addChain("1-2,3")).toEqual(6);
  });
  it("devuelve el total de la suma de varios números tomando en cuenta el separador definido por el usuario", () => {
    expect(addChain("//[;],6,3;2,4")).toEqual(15);
  });
});
