const array = [2, 3, 1, 5]
let ka = 5;

const findNumber = (arr, k) => {
  let included = false;
  arr.map(found => {
    if (k === found) {
      included = true
    }
  })

  if (included) {
    return 'YES'
    console.log('YES')
  } else {
    console.log('NO')
    return 'NO'
  }
}

findNumber(array, ka)