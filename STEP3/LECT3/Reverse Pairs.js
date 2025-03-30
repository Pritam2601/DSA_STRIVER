function reversePairsBrute(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j] * 2) count++;
    }
  }
  return count;
}
//time is approx n**2 and space is 1
// console.log(reversePairsBrute([40, 25, 19, 12, 9, 6, 2]));

//19 25 40 12 //here is the problem
//-19 -25 -40 -50
function merge(arr, low, mid, high) {
  let count = 0;
  const temp = [];
  let left = low;
  let right = mid + 1;

  //main part
  let j = mid + 1;
  for (let i = low; i <= mid; i++) {
    while (j <= high && arr[j] * 2 < arr[i]) {
      j++;
    }
    count += j - (mid + 1);
  }
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      //means left <=right
      temp.push(arr[left++]);
    } else {
      //means left >  right
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
function reversePairsOptimal(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

const arr1 = [40, 25, 19, 12, 9, 6, 2];

//time is nlogn for merge sort and
//in each level of merge sort total we iterate an an array of size n not more than and not less than that  so net it will be 2nlogn
//and space is n
console.log(reversePairsOptimal([-3, -2]));
