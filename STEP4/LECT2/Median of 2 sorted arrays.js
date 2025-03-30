function findMedianSortedArraysBrute(arr1, arr2) {
  const arr = [];
  let left = 0;
  let right = 0;
  let n = arr1.length;
  let m = arr2.length;
  while (left < n && right < m) {
    if (arr1[left] <= arr2[right]) {
      arr.push(arr1[left++]);
    } else arr.push(arr2[right++]);
  }
  while (left < n) {
    arr.push(arr1[left++]);
  }
  while (right < m) {
    arr.push(arr2[right++]);
  }
  const k = arr.length;

  return k % 2 === 0
    ? (arr[k / 2] + arr[k / 2 - 1]) / 2
    : arr[Math.floor(k / 2)];
}

//time is n+m and space is n+m ;
// console.log(findMedianSortedArraysBrute([1, 4, 7], [3, 10, 12]));

function findMedianSortedArraysBetter(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;
  const k = n + m;

  let index2 = Math.floor(k / 2);
  let index1 = index2 - 1;

  let [left, right, count] = [0, 0, 0];
  let [ele1, ele2] = [-Infinity, -Infinity];
  while (left < n && right < m) {
    if (arr1[left] <= arr2[right]) {
      if (count === index1) ele1 = arr1[left];
      if (count === index2) ele2 = arr1[left];
      count++;
      left++;
    } else {
      if (count === index1) ele1 = arr2[right];
      if (count === index2) ele2 = arr2[right];
      count++;
      right++;
    }
    if (ele2 !== -Infinity) break;
  }

  while (left < n) {
    if (count === index1) ele1 = arr1[left];
    if (count === index2) ele2 = arr1[left];
    count++;
    left++;
    if (ele2 !== -Infinity) break;
  }
  while (right < m) {
    if (count === index1) ele1 = arr2[right];
    if (count === index2) ele2 = arr2[right];
    count++;
    right++;
    if (ele2 !== -Infinity) break;
  }

  if (k % 2 === 1) {
    return ele2;
  }
  return (ele1 + ele2) / 2;
}
//time complextiy  is approx (n+m)/2 and space is 1  ;
// console.log(findMedianSortedArraysBetter([1, 2], [10, 12]));

function findMedianSortedArraysOptimal(a, b) {
  let n1 = a.length;
  let n2 = b.length;
  if (n1 > n2) return findMedianSortedArraysOptimal(b, a);
  let n = n1 + n2;
  let low = 0;
  let high = n1;
  let left = Math.floor((n + 1) / 2);
  while (low <= high) {
    const mid1 = Math.floor(low + (high - low) / 2);
    const mid2 = left - mid1;
    let [l1, l2, r1, r2] = [-Infinity, -Infinity, Infinity, Infinity];
    if (mid1 < n1) r1 = a[mid1];
    if (mid2 < n2) r2 = b[mid2];
    if (mid1 >= 1) l1 = a[mid1 - 1];
    if (mid2 >= 1) l2 = b[mid2 - 1];

    //now
    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 == 1) return Math.max(l1, l2);
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    } else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }
}

//time is log(min(n1,n2))  and space is 1 ;
console.log(findMedianSortedArraysOptimal([1, 3, 5], [2, 7, 8]));
