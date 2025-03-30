function mergeBrute(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;
  let i = 0;
  let j = 0;
  const sorted_1_2 = [];
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      sorted_1_2.push(arr1[i]);
      i++;
    } else {
      sorted_1_2.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    sorted_1_2.push(arr1[i]);
    i++;
  }
  while (j < m) {
    sorted_1_2.push(arr2[j]);
    j++;
  }

  for (let i = 0; i < n; i++) {
    arr1[i] = sorted_1_2[i];
  }
  for (let j = 0; j < m; j++) {
    arr2[j] = sorted_1_2[j + n];
  }

  return [arr1, arr2];
}
const arr1 = [1, 3, 5, 7];
const arr2 = [0, 2, 6, 8, 9];
//time is <(n+m) for filling sorted_1_2 and n+m for filling back all elements from sorted_1_2 to arr1 and arr2
//  and space is n+m
// mergeBrute(arr1, arr2);
// console.log(arr1,arr2)

//but our main task is not use any extra space

function mergeOptimalOne(a, b) {
  let n = a.length;
  let m = b.length;
  let pointer = 0;

  while (pointer < n && pointer < m && b[pointer] < a[n - 1 - pointer]) {
    [a[n - 1 - pointer], b[pointer]] = [b[pointer], a[n - 1 - pointer]];
    pointer++;
  }

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
}

const a = [1, 3, 5, 7];
const b = [0, 2, 6, 8, 9];
//time is nlogn + mlogn for sorting and whiile traversing max can we can for min(n,m)
//and space is 1
// mergeOptimalOne(a, b);
// console.log(a,b)
//[5,6,7]  and [1,2,3,4] worst case example

function swapIfGreater(arr1, arr2, left, right) {
  if (arr1[left] > arr2[right]) {
    //swapp
    [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
  }
}
function mergeOptimalTwo(a, b) {
  //possible cases of left and right ;
  //1.  right >=n and left < n ; we are in arr1 and arr2
  //2.  left >= n  and do not check right  |   we are in only arr2
  //3.  left < n we are in arr1 only as right cannot be in arr2 otherwise the it must be caught in  case1
  const n = a.length;
  const m = b.length;
  const len = n + m;
  let gap = Math.ceil(len / 2);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < len) {
      if (left < n && right >= n) {
        swapIfGreater(a, b, left, right - n);
      } else if (left >= n) {
        swapIfGreater(b, b, left - n, right - n);
      } else {
        swapIfGreater(a, a, left, right);
      }
      left++;
      right++;
    }

    if (gap === 1) break;
    gap = Math.ceil(gap / 2);
  }
}

const x = [1, 3, 5, 7];
const y = [0, 2, 6, 8, 9];
//here time complexity  first while life runs until gap do not get 1 again so for len 8 it runs when gap is 4  2 1 and means 3 times
//which means log8 with base 2 so log(n+m) and inner while loop runs for len-1 and so on so let's say len means n+m
//time is n+m * log(n+m)
//and space is 1;
mergeOptimalTwo(x, y);
console.log(x, y);
