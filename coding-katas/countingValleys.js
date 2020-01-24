/* Gary is an avid hiker.He tracks his hikes meticulously, paying close attention to small details like topography.During his last hike he took exactly steps.For every step he took, he noted if it was an uphill, , or a downhill, step.Gary's hikes start and end at sea level and each step up or down represents a

unit change in altitude.We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is
  , he first enters a valley units deep.Then he climbs out an up onto a mountain

units high.Finally, he returns to sea level and ends his hike.

Function Description

Complete the countingValleys function in the editor below.It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path

Input Format

The first line contains an integer
  , the number of steps in Gary's hike.
The second line contains a single string, of

characters that describe his path.

  Constraints

Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input

8
UDDDUDUU

Sample Output

1

Explanation

If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

_ /\      _
\    /
\/\/

He enters and leaves one valley. */

// OLD SOLUTION
/** 
 * function countingValleys(n, s) {
     const min = 2;
     const max = 1000000;
     let valleys = 0;
     let isInValley = false;

     s = (typeof s === "string") ? s.split('') : s;

     if (s.length >= min
          && s.length <= max
          && n === parseInt(n, 0)
          && n >= min
          && n <= max
          && n === s.length) {

          s = s.map(steps => ((steps === "U") ? 1 : -1));

          let path = 0;
          for(let i in s) {
               path += s[i];
               if (path < 0 && !isInValley) {
                    isInValley = true;
               }
               if (path == 0 && isInValley) {
                    valleys++;
                    isInValley = false;
               }
          }
     }

     return valleys;
}
 * **/



const countingValleys = (n, string) => {

  let valleys = 0;
  let isInValley = false;

  console.log(`n steps: ${n}`)

  console.log(`each step Uphill or Downhill: ${string}`);


  // Make Array of U and D if Input as string

  string = (typeof string === "string") ? string.split('') : s;


  console.log(string)


  // Map Over String return +1 for U and -1 for D
  string.map(step => ((step === 'U') ? 1 : -1))
    // Filter if Vally or not with Reduce all Steps are done  
    .reduce((prev, next) => {
      // Current Intteration Step under 0 you are in a VAlley
      if (prev < 0 && !isInValley) {
        isInValley = true;
      }
      // You were in a Valley if your step and the next one are 0
      if ((prev + next) === 0 && isInValley) {
        valleys++
        isInValley = false;
      }

      return prev + next
    });

  console.log(valleys);
  return valleys;

}


countingValleys(8, "UDDDUDUU");