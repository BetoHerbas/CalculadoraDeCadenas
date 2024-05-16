function addnumbersInArray(numbersArray){
  let sum = 0;
  for(const number of numbersArray){
    if(number <= 1000)
      sum = sum + Number(number);
  } 
  return sum;
}

export default function addChain(inputString) {
  let defaultDelimiters = [',', '-', /[,|-]/];
  let numbersArray = inputString;
  let sum = 0;

  const customDelimiterMatch = inputString.match(/^\/\/\[(.)\]/);

  if(customDelimiterMatch){
    const delimiter = customDelimiterMatch[1];
    defaultDelimiters.pop();
    defaultDelimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbersArray = inputString.slice(customDelimiterMatch[0].length +3 );
  }

  numbersArray = inputString.split(defaultDelimiters[2]);

  if(inputString === "")
    return 0;

  if(numbersArray.length == 1)
    return Number(numbersArray[0]);

  else{  
    return addnumbersInArray(numbersArray);
  }
}