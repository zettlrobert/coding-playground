// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.

//  Examples: spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw" spinWords("This is a test") => returns "This is a test" spinWords("This is another test")=> returns "This is rehtona test"


const input = process.argv[2];

const spinningWords = sentence => {

  sentence = input;

  console.log(sentence);

  let wordArray = sentence.split(' ');
  console.log(wordArray);

  wordArray.map((word, index) => {
    console.log(`Word: ${word} on Index: ${index}`)

    if (word.length >= 5) {
      console.log(`${word} is Longer than 5`)

      wordArray[index] = word.split('').reverse().join('');

    }

  })

  console.log(`This was your Sentence ${wordArray}`)

  let res = wordArray.join(' ');

  console.log(res);

}

spinningWords();





// Optimal Solution
// function spinWords(words) {
//   return words.split(' ').map(word => {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }