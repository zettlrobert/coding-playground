// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

let arr1 = [false, 1, 0, 1, 2, 0, 1, 4, "a"];


const moveZeros = (arr) => {
  let res = []

  for (let i = arr.length; i >= arr.length; i--) {
    console.log(i);
    if (arr[i] === 0) {
      let tmp = arr.splice(i, 1)
      arr.push(tmp[0])
    }
  }
  console.log(arr)
}

moveZeros(arr1);
