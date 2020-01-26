// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by from at the front of the line to

// at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions.If two people swap positions, they still wear the same sticker denoting their original places in line.One person can bribe at most two others.For example, if
// and bribes, the queue will look like this:

// .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

// Function Description

// Complete the function minimumBribes in the editor below.It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

// minimumBribes has the following parameter(s):

// q: an array of integers

// Input Format

// The first line contains an integer

//   , the number of test cases.

// Each of the next
// pairs of lines are as follows:
// - The first line contains an integer, the number of people in the queue
//   - The second line has

// space - separated integers describing the final state of the queue.

//   Constraints

// Subtasks

// For
// score
// For score

// Output Format

// Print an integer denoting the minimum number of bribes needed to get the queue into its final state.Print Too chaotic if the state is invalid, i.e.it requires a person to have bribed more than

// people.

// Sample Input

// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4

// Sample Output

// 3
// Too chaotic


//q an array of integers
const minBribes = (q) => {

  let counter = 0;

  //Iterate through Array, starting from the End

  for (i = q.length; i >= 0; i--) {
    // Number cannot move more than two places
    // Number minus its postion in the array is 3 or greater --> bribed more than two people
    if (q[i] - (i + 1) >= 3) {
      console.log("Bribed more than 3, TOO CHAOTIC");
      return "Too cahotic";
    }


    // One Index before the ORIGINIAL index of the current integer all the way to where it currently is, check if any integer are greater

    for (let j = Math.max(0, q[i] - 2); j < 1; j++) {
      if (q[j] > q[i]) counter++
    }

  }

  console.log(`There were: ${counter} bribes`)

}

minBribes([2, 1, 5, 3, 4]);