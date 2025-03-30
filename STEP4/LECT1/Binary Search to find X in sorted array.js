const arr = [3, 4, 6, 7, 9, 12, 16, 17];
function binarySearch(arr, target) {
  let cnt = 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    cnt++;
    const mid = Math.floor(high + (low - high) / 2);
    if (arr[mid] < target) low = mid + 1;
    else if (target < arr[mid]) high = mid - 1;
    else return mid;
  }
  //actually it is logn+1 time complexity as here we are going
  //steps FROM TO [search space]
  //1.  8--> 4
  //2   4---> 2
  //3   2--->1
  //4.  1 here index FOUND will be returned or will be rejected by the breaking of LOOP in next attempt
  console.log(cnt);
  return -1;
}
//time is logn and space is 1 ;
// console.log(binarySearch(arr, 9));

function binarySearchRecursive(arr, target, low, high) {
  if (low > high) return -1;
  const mid = Math.floor(high + (low - high) / 2);
  if (arr[mid] < target) low = mid + 1;
  else if (target < arr[mid]) high = mid - 1;
  else return mid;
  return binarySearchRecursive(arr, target, low, high);
}
//time is logn+1
//space is
// Step 1: Search in 16 elements  → Stack level 1
// Step 2: Search in 8 elements   → Stack level 2
// Step 3: Search in 4 elements   → Stack level 3
// Step 4: Search in 2 elements   → Stack level 4
// Step 5: Search in 1 element    → Stack level 5 (Base case, start returning)
// console.log(binarySearch(arr, 13, 0, 7));
