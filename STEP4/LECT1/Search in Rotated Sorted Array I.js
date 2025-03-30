function binarySearchInRotatedArr(arr, target) {
  //it is game of rejection
  //ELIMINATION IS THE KEY so try your hell to elminate one half about which u are 100% SURE
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) return mid;
    //means left one is sorted
    else if (arr[low] <= arr[mid]) {
      //if ele is there then accept this half
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      }
      //OTHERWISE reject
      else {
        low = mid + 1;
      }
    }

    //means RIGHT ONE IS SORTED
    else {
      //if ele is there then accept this half
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      }
      //OTHERWISE reject
      else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
console.log(binarySearchInRotatedArr([2, 3, 4, 5, 1], 1));
