function ceilAndFloor(arr, x) {
  let floor = -1;
  let ceil = arr.length;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] < x) {
      floor = mid;
      ceil = mid + 1;

      low = mid + 1;
    } else if (arr[mid] === x) {
      return [arr[mid], arr[mid]];
    } else {
      high = mid - 1;
    }
  }

  //handling either floor or ceil is not found ;
  if (floor === -1) {
    return [-1, arr[0]];
  } else if (ceil === arr.length) {
    return [arr[floor], arr.length];
  }

  return [arr[floor], arr[ceil]];
}
console.log(ceilAndFloor([3, 4, 7, 8, 8, 10], 11));
