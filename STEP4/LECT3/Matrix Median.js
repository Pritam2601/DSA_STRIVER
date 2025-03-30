function medianMatrixBrute(mat) {
  const list = [];
  const n = mat.length;
  const m = mat[0].length;
  for (const row of mat) {
    for (const col of row) {
      list.push(col);
    }
  }
  list.sort((a, b) => a - b);
  return list[Math.floor((n * m) / 2)];
}

//time is n*m (for storing ) + n*mlog(n*m) (for sorting ) and space is n*m
// console.log(
//   medianMatrixBrute([
//     [1, 3, 5],
//     [2, 6, 9],
//     [3, 6, 9],
//   ])
// );

//________________________________________________________________
function minMax(mat) {
  let min = Infinity;
  let max = -Infinity;
  const m = mat[0].length;
  for (const row of mat) {
    if (row[0] < min) min = row[0];
    if (row[m - 1] > max) max = row[m - 1];
  }
  return [min, max];
}
function findIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] <= target) low = mid + 1;
    else high = mid - 1;
  }
  return low;
}
function findSmallerEq(mat, target) {
  const m = mat[0].length;
  let count = 0;
  for (const row of mat) {
    const index = findIndex(row, target);
    count += index;
  }
  return count;
}
function medianMatrixOptimal(mat) {
  const n = mat.length;
  const m = mat[0].length;

  let [low, high] = minMax(mat);
  const k = (n * m + 1) / 2;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const no_smaller_eq = findSmallerEq(mat, mid);
    if (no_smaller_eq < k) low = mid + 1;
    else high = mid - 1;
  }
  return low;
}
//space is 1

//time of BRUTE  --> n*m + n*m*log(n*m)
//time of Optimal--> n + n*logm*log(maxVal-minVal)
//for comparison for time of these 2 .. say n = 399 and m = 397 and maxVal=2000 and minVal=1 as given by GFG
console.log(
  medianMatrixOptimal([
    [1, 5, 7, 9, 11],
    [2, 3, 4, 5, 10],
    [9, 10, 12, 14, 16],
  ])
);

function timeComparsion(n, m, maxVal, minVal) {
  return (
    -n -
    n * Math.log2(m) * Math.log2(maxVal - minVal) +
    n * m +
    n * m * Math.log2(n * m)
  );
}

// console.log(timeComparsion(399, 397, 2000, 1)); // no of op more is 2856367
