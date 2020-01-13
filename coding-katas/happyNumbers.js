console.log(`To test number, node happyNumber.js "Number" \n`);

let input = process.argv[2];

console.log(`The Number you are testing is: ${input}`);



const isHappyNumber = (number) => {
  number = input;

  // Test Number if min 2 digits.
  let digits = number.toString().split('');

  if (digits.length <= 1) {
    console.log(`Only one Number, no Happy Number`);
  }


  // Actual Logic


}

isHappyNumber();