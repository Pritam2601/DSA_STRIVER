function findPeakGridBrute(mat) {
  const n = mat.length;
  const m = mat[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const ele = mat[i][j];
      if (
        (j === 0 || ele > mat[i][j - 1]) &&
        (i === 0 || ele > mat[i - 1][j]) &&
        (i === n - 1 || ele > mat[i + 1][j]) &&
        (j === m - 1 || ele > mat[i][j + 1])
      ) {
        console.log(ele, [i, j]);
      }
    }
  }
}
//time is n*m * 4 and space is 1 ;
// console.log(
//   findPeakGridBrute([
//     [10, 20, 15],
//     [21, 30, 14],
//     [7, 16, 32],
//   ])
// );
//ans is 30 and 32 ;

function findColMaxRow(mat, col) {
  let maxIndex = -1;
  let max = -Infinity;
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    if (mat[i][col] > max) {
      max = mat[i][col];
      maxIndex = i;
    }
  }
  return maxIndex;
}
function findPeakGridOptimal(mat) {
  const n = mat.length;
  const m = mat[0].length;
  let low = 0;
  let high = m - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const i = findColMaxRow(mat, mid);
    console.log(mat[i][mid]);
    if (mid > 0 && mat[i][mid - 1] > mat[i][mid]) high = mid - 1;
    else if (mid < m - 1 && mat[i][mid + 1] > mat[i][mid]) low = mid + 1;
    else return [i, mid];
  }
}
//time  is approx n(linear search) * logm and space is 1
console.log(
  findPeakGridOptimal([
    [1, 4],
    [3, 2],
  ])
);

//special test case
//   1.   [
//     [10, 30, 40, 50, 20],
//     [1,  3,  2,  500, 4],
//   ] //ans is [1,3]
