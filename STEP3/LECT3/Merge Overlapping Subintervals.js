const arr = [
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
];

function mergeBetter(arr) {
  const n = arr.length;
  const ans = [];
  arr.sort((a, b) => a[0] - b[0]);

  for (const interval of arr) {
    let start = interval[0];
    let end = interval[1];
    if (ans.length !== 0 && start <= ans.at(-1)[1]) {
      end = Math.max(ans.at(-1)[1], end);
      ans.at(-1)[1] = end;
    } else {
      ans.push([start, end]);
    }
  }
  return ans;
}
//time complexity is nlogn for sorting and n for iterating the loop so nlogn + n
//space is 1 if u do not consider the ans
// console.log(mergeBetter(arr));

function mergeOptimal(arr) {
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  //[ [ 1, 3 ],[ 2, 6 ],[ 2, 4 ],     [ 8, 9 ],[ 8, 10 ],[ 9, 11 ],         [ 15, 18 ], [ 16, 17 ]]
  let mergeIndex = 0;

  for (let i = 1; i < n; i++) {
    const start = arr[i][0];
    const end = arr[i][1];
    if (start <= arr[mergeIndex][1]) {
      //means this current element is the part of last interval stored in the main arr at mergeIndex
      arr[mergeIndex][1] = Math.max(arr[mergeIndex][1], end);
    } else {
      //this means this current interval is not part of any other int so we at the next place we put this interval
      mergeIndex++;
      arr[mergeIndex] = arr[i];
    }
  }
  return arr.slice(0, mergeIndex + 1);
}
//time will be same that is nlogn + n ;
//but we will mutate the given array so space wil be reduced by n ;
console.log(mergeOptimal(arr));
//check for rest of code --check out this article https://www.geeksforgeeks.org/merging-intervals/

//NOTE 1
//read this article that is all about inserting a  interval https://www.geeksforgeeks.org/insert-in-sorted-and-non-overlapping-interval-array/
