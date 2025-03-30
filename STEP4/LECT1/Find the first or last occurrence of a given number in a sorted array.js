const arr = [2, 4, 6, 8, 8, 8, 11, 13];
function firstAndLastOccBrute(arr, target) {
  let start = -1;
  let end = -1;
  for (const [i, ele] of arr.entries()) {
    if (ele === target) {
      if (start === -1) start = i;
      end = i;
    }
  }
  return [start, end];
}
//time is n and space is 1
// console.log(firstAndLastOccBrute(arr, 11));

function firstAndLastOccOptimal(arr, target) {
  let start = -1;
  let end = -1;
  const n = arr.length;
  let low = 0;
  let high = n - 1;

  //for LB
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= target) {
      start = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  //now check
  if (!(start < n && arr[start] === target)) return [-1, end];

  //find UB
  //this case 5 7 7 7 8 8 8
  end = n; //for the above case
  low = 0;
  high = n - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > target) {
      end = mid;
      high = mid - 1;
    } else {
      //covering  when arr[mid] <= target
      low = mid + 1;
    }
  }
  return [start, end - 1];
}

//striver tried to solve this q using lower bound and upper bound
//so when we calc lower bound --
//possible cases
//1. target is there then OKAY
//2. target is between ele of array then NOT OKAY
//3. when target is biggest of all then lower bound is the length of array
//4. when target is smallest of all then lower bound is 0
//SOL is we need to check that LB is 0<=LB <N and arr[LB]===target
//AND once lower bound is found then prob UPPER bound will also exist

//time is 2logn and space is 1
console.log(firstAndLastOccOptimal(arr, 2));
