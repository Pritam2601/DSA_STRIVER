function kthElementInSortedArray(a, b, k) {
  // code here
  const n1 = a.length;
  const n2 = b.length;
  if (n1 > n2) return this.kthElement(b, a, k);
  const left = k;
  let low = Math.max(0, k - n2);
  let high = Math.min(k, n1);
  while (low <= high) {
    //0      11
    const mid1 = Math.floor(low + (high - low) / 2);
    const mid2 = left - mid1;
    let [l1, l2, r1, r2] = [-Infinity, -Infinity, Infinity, Infinity];
    if (mid1 < n1) r1 = a[mid1];
    if (mid2 < n2) r2 = b[mid2];
    if (mid1 >= 1) l1 = a[mid1 - 1];
    if (mid2 >= 1) l2 = b[mid2 - 1];
    console.log(mid1, mid2);
    console.log(l1, "|", r1);
    console.log(l2, "|", r2);

    if (l1 <= r2 && l2 <= r1) return Math.max(l1, l2);
    else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }
}

const o = new Solution();
console.log(
  o.kthElement(
    [5, 5, 8, 8, 8, 9, 11, 11, 11],
    [4, 4, 4, 4, 6, 8, 9, 9, 9, 11, 13, 14],
    20
  )
);
//Story about low and high  (if left is changed acc to need )
//suppose  n1  n2  left
//         4   10    5   then u can say low =0 and high = n1
//         4   10    2    then u have to say low =0 and high = Math.min(left,n1);
//         4   10    12   then u have to say low = Math.max(0 , Math.max(0,left-n)) and high what ever
//so safe will be low = Math.max(0 , Math.max(0,left-n)) and high = Math.min(left,n1);
