// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

// (         --> If char is in input one time
// )         --> If char is in word more than once

// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((" 


const input = process.argv[2];


const duplicateEncoder = word => {
  word = input.toLowerCase();


  // keep count of all letters
  let letterCount = {}

  // array of individual letters
  let letters = word.split('');

  // Array for Symbol Output
  let output = []


  // For each Letter in letters count appearances
  letters.forEach(letter => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  })


  // Return Symbol for Each Letter
  letters.map(letter => {
    let res = letterCount[letter] === 1 ? '(' : ')';
    // Get Symbols into Output Array
    output.push(res);
  });


  console.log(letterCount);
  console.log(letters);

  console.log(output.join(''));

}


// function duplicateEncode(word) {

//   // Keep count of all letters
//   let letterCount = {};

//   // Array of Individual Letters
//   let letters = word.toLowerCase().split('');

//   // Array for Symbol Output
//   let output = [];

//   // For each Letter in letters count appearances
//   letters.forEach(letter => letterCount[letter] = (letterCount[letter] || 0) + 1);


//   // Return Symbol for Each Letter
//   letters.map(letter => {
//     let res = letterCount[letter] === 1 ? '(' : ')';
//     // Get Symbols into Output Array
//     output.push(res)
//   })

//   return output.join('')

// }


duplicateEncoder();