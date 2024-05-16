export default function sumarCadena(cadena) {
  let delimiters = [',', '-', /[,|-]/];
  let numbers = cadena;
  let acc = 0;

  const delimiterMatch = cadena.match(/^\/\/\[(.)\]/);

  if(delimiterMatch){
    const delimiter = delimiterMatch[1];
    delimiters.pop();
    delimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbers = cadena.slice(delimiterMatch[0].length +3 );
  }

  numbers = cadena.split(delimiters[2]);

  if(cadena === "")
    return 0;

  if(numbers.length == 1)
    return Number(numbers[0]);

  else{  

    for(const num of numbers){
      if(num <= 1000)
        acc = acc + Number(num);
    }    
    return acc;
  }
}
