function max(arr) {
  let max = -Infinity;
  for (const ele of arr) {
    if (ele > max) max = ele;
  }
  return max;
}
function DivisonSum(arr, divisor) {
  let sum = 0;
  for (const ele of arr) {
    sum += Math.ceil(ele / divisor);
  }
  return sum;
}
function smallestDivisorOptimal(arr, threshold) {
  let low = 1;
  let high = max(arr);
  let ans = high; //right now at this threshold needs to be eq to arr.length and same is given in q
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (DivisonSum(arr, mid) <= threshold) {
      ans = mid;
      high = mid - 1; //on moving left we get lower mid/divisor and greater sumOfDivison in the hope that too will be <=threshold
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
//time is log(max(arr)) * arr.length + n (max of arr) and space is 1;
console.log(smallestDivisorOptimal([5, 7, 10], 3));
