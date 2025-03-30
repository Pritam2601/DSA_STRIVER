function findMissingAndRepeatingBrute(arr) {
  const n = arr.length;
  const ans = [];
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === i) count++;
    }
    if (count === 2) ans[0] = i; //repeating
    else if (count === 0) ans[1] = i; //missing
    if (ans.length === 2) break;
  }
  return ans;
}
//time is n**2 and
//space is 1
// console.log(findMissingAndRepeatingBrute([4, 3, 6, 2, 1, 1]));

function findMissingAndRepeatingBetter(arr) {
  const n = arr.length;
  const hashArray = Array(n + 1).fill(0); //size will be n+1;
  for (let i = 0; i < n; i++) {
    hashArray[arr[i]]++;
  }
  const ans = [];
  for (let i = 1; i <= n; i++) {
    if (hashArray[i] === 2) ans[0] = i;
    else if (hashArray[i] === 0) ans[1] = i;

    if (ans.length === 2) break;
  }
  return ans;
}
//time is 2*n
//and space is n+1 for hashArray;
// console.log(findMissingAndRepeatingBetter([4, 3, 6, 2, 1, 1]));

function findMissingAndRepeatingOptimal(arr) {
  const n = arr.length;
  const sumTotal = (n * (n + 1)) / 2;
  let sumArray = 0;
  let sumTotal_sq = 0;
  let sumArray_sq = 0;
  //x : repeating and y :missing
  for (let i = 0; i < n; i++) {
    sumArray += arr[i];
    sumArray_sq += arr[i] ** 2;
    sumTotal_sq += (i + 1) ** 2;
  }
  //x-y = sumArray-sumTotal ;
  let a = sumArray - sumTotal;
  let b = sumArray_sq - sumTotal_sq; //=== (x-y)*(x+y)
  b = b / a; //==(x+y)
  const repeating = (b + a) / 2;
  const missing = repeating - a;
  return [repeating, missing];
}

//time is n and
//space is 1
// console.log(findMissingAndRepeatingOptimal([4, 3, 6, 2, 1, 1]));

function optimalXor(arr) {
  const n = arr.length;
  let xr = 0; //this is to get 1 ^ 5 means repeating ^ missing
  for (let i = 0; i < n; i++) {
    xr = xr ^ arr[i] ^ (i + 1);
  }
  //1 and 5 are diff so  xor of them will contain 1 at least one time so find
  //the first one from right ;  // 001 ^ 101 = 100
  let bitNo = 0;
  while (1) {
    if ((xr & (1 << bitNo)) !== 0) {
      break;
    }

    bitNo++;
  }
  //upar while loop kaise ke leta hai find first 1
  //let's see ! let's say we have xr 12 that is 1100 and then in each iteration
  //we are doing & with 0001 then 0010 then 0100 (breaks here!) and then 1000

  //part 2 of Q
  //we want to segrate from array(4, 3, 6, 2, 1, 1) +   1 to n (1 2 3 4 5 6) ;
  //into two category 1 and 0 ... 1 will have ele who has 1 at FOUND bitNo
  //why so...doing so we can have 1 and 1 in one category and 5 in the other one
  //why would then --- we will take xor of each category which result in 1 and 5
  //because
  //1 -- exist for 3 times (odd)
  //5 -- exist for 1 times (odd)
  //rest -- exist for even times

  let one = 0;
  let zero = 0;
  for (let i = 0; i < n; i++) {
    //for array ele
    if ((arr[i] & (1 << bitNo)) !== 0) {
      //belongs to one cat.
      one = one ^ arr[i];
    } else {
      //belongs to zero cat.
      zero = zero ^ arr[i];
    }

    //for 1 to n ele
    if (((i + 1) & (1 << bitNo)) !== 0) {
      one ^= i + 1;
    } else {
      zero ^= i + 1;
    }
  }

  //now it is unsure which is repeating and missing b/w one and zero
  let count = 0;
  for (const ele of arr) {
    if (ele === one) count++;
  }
  if (count === 2) return [one, zero];
  else {
    return [zero, one];
  }
  console.log(one, zero);
}
//time is 3*N and a small while loop and space is 1 ;
// console.log(optimalXor([3, 3, 5, 2, 6, 1]));
