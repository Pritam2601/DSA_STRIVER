//def of lower bound and upper bound as well ;
// Lower bound: Where you would insert x in a sorted list without breaking order.
//        smallest i such that arr[i]>=x
// Upper bound: The first seat where a taller person than x is sitting in a lineup
//       smallest i such that arr[i] > x [strictly]

const arr = [1, 2, 3, 3, 7, 8, 9, 9, 9];
function upperBound(arr, x) {
  //possible cases
  //1. when x is there then we will return mid +1 as mid will have x itself but before returning that mid+1 we have to make sure that that mid is last duplicate if duplicates of x are PRESENT
  //2. when x is not there then low will always return the ans
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(high + (low - high) / 2);
    if (x < arr[mid]) high = mid - 1;
    else if (x > arr[mid]) low = mid + 1;
    else {
      //case 1 covered
      if (mid < high && arr[mid] === arr[mid + 1]) low = mid + 1;
      else return mid + 1;
    }
  }
  //case 2 covered
  return low;
}
//time is logn  and space is 1;
// console.log(upperBound(arr, 3));

// const arr = [1, 2, 3, 3, 7, 8, 9, 9, 9];
function upperBoundStriver(arr, x) {
  let ans = arr.length;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
console.log(upperBoundStriver(arr, 8));
console.log(upperBoundStriver(arr, 100));
