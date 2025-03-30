function binarySearch(arr, target) {
  let [low, high] = [0, arr.length - 1];
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
function searchMatrix2Better(mat, target) {
  const n = mat.length;
  const m = mat[0].length;
  for (let i = 0; i < n; i++) {
    const j = binarySearch(mat[i], target);
    if (j !== -1) return [i, j];
  }

  return [-1, -1];
}
//time is nlogm and space is 1 ;
// console.log(
//   searchMatrix2Better(
//     [
//       [5, 6, 10],
//       [6, 10, 13],
//       [10, 13, 18],
//       [14, 18, 19],
//     ],
//     14
//   )
// );
let count = 0;
function searchMatrix2Optimal(mat, target) {
  const [n, m] = [mat.length, mat[0].length];
  let col = m - 1;
  let row = 0;

  while (row < n && col >= 0) {
    count++;
    if (mat[row][col] === target) return [row, col];
    else if (target > mat[row][col]) row++;
    else col--;
  }

  return [-1, -1];
}

//time is approx n+m and space is 1 ;
console.log(
  searchMatrix2Optimal(
    [
      [5, 6, 10],
      [6, 10, 13],
      [10, 13, 18],
      [14, 18, 19],
    ],
    14
  )
);

//u can use this last optimal sol in search in a 2D matrix too
