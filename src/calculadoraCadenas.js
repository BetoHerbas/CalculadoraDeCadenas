let defaultDelimiters = [',', '-', /[,|-]/];

function addnumbersInArray(numbersArray){
  let sum = 0;
  for(const number of numbersArray){
    if(number <= 1000)
      sum = sum + Number(number);
  } 
  return sum;
}

function obtainCustomDelimiter(customDelimiterMatch){
    const delimiter = customDelimiterMatch[1];
    defaultDelimiters.pop();
    defaultDelimiters.push(new RegExp(`[${delimiter}|,|-]`));
}

export default function addChain(inputString) {
  let numbersArray = inputString;
  const customDelimiterMatch = inputString.match(/^\/\/\[(.)\]/);

  if(customDelimiterMatch){
    obtainCustomDelimiter(customDelimiterMatch);
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