export default function sumarCadena(cadena){
  let cadenaNumeros;
  let resultado;
  if(cadena === ""){
    return 0;
  }
  cadenaNumeros = cadena.split(',').map(Number);
  resultado = cadenaNumeros.reduce((total, numero) => total + numero, 0);
  return resultado;
}