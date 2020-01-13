// You are given a string of space separated numbers and have to return the highesst and lowest number.

const input = process.argv[2];

const minAndMax = numbers => {
  // get Numbers from Input CLI
  numbers = input;

  // Split on Space
  numbers = numbers.split(' ');
  // Use Math Min and Max in Template String to Return max and min values;
  console.log(`${Math.max(...numbers)} ${Math.min(...numbers)}`);

  return `${Math.max(...numbers)} ${Math.min(...numbers)}`


}

minAndMax();