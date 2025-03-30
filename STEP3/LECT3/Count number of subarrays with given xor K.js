const arr = [4, 2, 2, 6, 4];
function subArrayWithXORkBetter(arr, k) {
  const n = arr.length;
  let subArray = [];

  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor ^= arr[j];
      if (xor === k) subArray.push(arr.slice(i, j + 1));
    }
  }
  return subArray;
}
//here time is approx n**2 and space is 1 ;
// console.log(subArrayWithXORkBetter(arr, 6));

function subArrayWithXORkOptimal(arr, k) {
  const n = arr.length;
  const mpp = new Map();
  let xor = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    xor ^= arr[i];
    if (xor === k) count++;

    //this block cannot be put in else block otherwise this will fail this test case
    //[6,6,6] here look index 2---  6 6 6 is subarray 1 and 6 in itself is a subarray
    //in our old q where sum was asked then [0,0,0] 0 is a subarray and 0 0 0 too
    const preXorfreq = mpp.get(xor ^ k);
    count += preXorfreq !== undefined ? preXorfreq : 0;

    mpp.set(xor, (mpp.get(xor) || 0) + 1);
  }
  return count;
}

console.log(subArrayWithXORkOptimal([4, 2, 2, 6, 4], 6));
