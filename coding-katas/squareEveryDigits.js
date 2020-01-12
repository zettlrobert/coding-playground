// Squarde every Number from the Input and Concatenate the Results
// 9119 --> 811181
// 9 * 9 = 81
// 1 * 1 = 1
// 1 * 1 = 1
// 9 * 9 = 81


let input = process.argv[2];
console.log(`Your Input: ${input} \n`);


const squareEveryDigit = num => {

  num = input;

  let digits = num.toString().split('');

  console.log(`Digits of the Number you passed: ${digits}`);


  let sum = [];

  digits.map(digit => {
    console.log(`Every digit ${digit}`);
    let multipleDigit = Math.pow(digit, 2); // or digit * digit
    sum.push(multipleDigit)
  })

  let resString = sum.join('');

  let res = parseInt(resString, 10);

  console.log(res);


}

squareEveryDigit();