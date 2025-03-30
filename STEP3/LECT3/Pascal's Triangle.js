// 1    --  1
// 1 1  -- 2
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1   -- 5
//1       4                6                   4               1           --  template for this row no 5
// 1  prev*(5-1)/1   prev * (5-2)/2    prev * (5-3)/3    prev *(5-4)/4
function nCr(N, C) {
  let ans = 1;
  for (let c = 1; c < C; c++) {
    ans = (ans * (N - c)) / c;
  }
  return ans;
}
//time is C-1 means col number
console.log(nCr(5, 3));

function pascalRow(N) {
  let row = [1];
  let ans = 1;
  for (let c = 1; c < N; c++) {
    ans = (ans * (N - c)) / c;
    row.push(ans);
  }
  return row;
}
//time is N-1
console.log(pascalRow(5));

function pascalTriangle(N) {
  const triangle = [];
  for (let r = 1; r <= N; r++) {
    triangle.push(pascalRow(r));
  }
  return triangle;
}
//time is  N * (N*(N-1)/2) approx N**2;
console.log(pascalTriangle(5));
