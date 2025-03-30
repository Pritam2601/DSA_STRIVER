function searchMatrix(mat, target) {
  let n = mat.length;
  let m = mat[0].length;

  let lowCol = 0;
  let lowRow = 0;
  let highCol = m - 1;
  let highRow = n - 1;

  while (lowRow <= highRow) {
    const midRow = Math.floor(lowRow + (highRow - lowRow) / 2);
    if (mat[midRow][0] <= target && target <= mat[midRow][m - 1]) {
      while (lowCol <= highCol) {
        const midCol = Math.floor(lowCol + (highCol - lowCol) / 2);
        if (mat[midRow][midCol] === target) return true;
        else if (mat[midRow][midCol] < target) lowCol = midCol + 1;
        else highCol = midCol - 1;
      }
      return false;
    } else if (mat[midRow][0] > target) highRow = midRow - 1;
    else lowRow = midRow + 1;
  }
  return false;
}
//time is logn + logm = logn*m and space is  1;
console.log(searchMatrix([[1]], 2)); //true ;

function searchMatrixStriver(mat, target) {
  const n = mat.length;
  const m = mat[0].length;
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const row = Math.floor(mid / m);
    const col = mid % m;
    if (mat[row][col] === target) return true;
    else if (mat[row][col] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}
//time is logm*n and space is 1
console.log(searchMatrixStriver([[1]], 2));
