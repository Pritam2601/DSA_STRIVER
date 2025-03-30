function kthMissingBrute(arr, k) {
  for (const ele of arr) {
    if (ele <= k) k++;
    else break;
  }
  return k;
}
//time is n and space is 1 ;
console.log(kthMissingBrute([2, 3, 4, 7, 11], 1));

function kthMissingOptimal(arr, k) {
  let low = 0;
  let high = arr.length - 1;

  let index = -1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const numOfMissingNumAtMid = arr[mid] - (mid + 1);
    if (numOfMissingNumAtMid < k) {
      index = mid;

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return k + index + 1; //this is like this k + (index+1)
}
//time is logn and space is 1 ;
// console.log(kthMissingOptimal([2, 3, 4, 7, 11], 5));
