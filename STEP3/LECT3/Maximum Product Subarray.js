const arr = [2, 3, -2, 4];
function maximumProductSubArrayBetter(arr) {
  let max = -Infinity;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = i; j < n; j++) {
      product *= arr[j];
      max = Math.max(max, product);
    }
  }
  return max;
}
//time is approx n**2 and space is 1
// console.log(maximumProductSubArrayBetter(arr));

function maximumProductSubArrayOptimal(arr) {
  //possible cases :
  //1. only positive ...simple take prodcut of all
  //2. even neg , rest +ve ...simple take product of all
  //3. odd neg , rest +ve ... take product from start and end whichever is max will be set as max
  //ex for case 3 -- [1,2,-1,2,123,-6,7, -8 , 7,8] here i will have chance to store --
  // for -1 --> [1,2] as prefix and [2....end] as suffix
  // AND  for -6--> both prefix and suffix  will be neg so u may store that too
  // AND for -8 --> u have [1,7] as prefix and [7,end] as suffix
  //4. when it has zeros
  //take example [2,3,0,-1,200,300,0,5,5]  u need to make prefix and suffix 1 again when they become zero
  let n = arr.length;
  let ans = -Infinity;
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < n; i++) {
    prefix *= arr[i];
    suffix *= arr[n - 1 - i];
    ans = Math.max(ans, prefix, suffix);

    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
  }
  return ans;
}
//time is n and space is 1
console.log(maximumProductSubArrayOptimal([2, 3, 0, -1, 200, 300, 0, 5, 5]));
