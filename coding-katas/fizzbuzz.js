// Function that returns Numbers from 1 to 100 Replace some Numbers
// For multiple of 3 return Buzz
// For multiple of 5 return Buzz
// For multiple of 3 and 5 return FizzBuzz

const fizzbuzz = () => {
  let start = 1;

  for (start; start < 101; start++) {

    if (start % 3 == 0 && start % 5 == 0) {
      console.log('FizzBuzz');
    } else if (start % 3 == 0) {
      console.log('Fizz');
    } else if (start % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(start);
    }

  }

}

fizzbuzz();