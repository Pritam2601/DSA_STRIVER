function countOnes(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === 1) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return arr.length - low;
}
function maxOnesRow(mat) {
  let maxOnes = 0;
  let index = -1;
  for (const [i, row] of mat.entries()) {
    const count_ones = countOnes(row);

    if (count_ones > maxOnes) {
      maxOnes = count_ones;
      index = i;
    }
  }
  return index;
}

//time is n logm and space is 1 ;
console.log(
  maxOnesRow([
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ])
); //2
