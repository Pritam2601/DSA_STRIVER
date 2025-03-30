const arr = [5, 3, 2, 4, 1];
function countInversionsBrute(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }
  return count;
}

//time is n **2 approx
//space is  1
// console.log(countInversionsBrute(arr));

function merge(arr, low, mid, high) {
  let count = 0;
  const temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] > arr[right]) {
      temp.push(arr[left++]);
      count += high - right + 1;
    } else {
      temp.push(arr[right++]);
    }
  }
  while (left <= mid) {
    temp.push(arr[left++]);
  }
  while (right <= high) {
    temp.push(arr[right++]);
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return count;
}
function mergeSort(arr, low, high) {
  let mainCount = 0;
  if (low >= high) return 0;
  const mid = Math.floor(low + (high - low) / 2);
  mainCount += mergeSort(arr, low, mid);
  mainCount += mergeSort(arr, mid + 1, high);
  mainCount += merge(arr, low, mid, high);
  return mainCount;
}
function countInversionsOptimal(arr) {
  return mergeSort(arr, 0, 4);
}
//time is nlogn
// and space is n
console.log(countInversionsOptimal(arr));
