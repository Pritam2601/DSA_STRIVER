function sqrtByPritam(n) {
  let low = 1;
  let high = n;
  let maxPossible = -Infinity;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (mid ** 2 > n) {
      high = mid - 1;
    } else if (mid ** 2 < n) {
      maxPossible = Math.max(maxPossible, mid); //here i have checked this check which one is max is not imp as current mid will be always max than stored maxPossible
      low = mid + 1;
    } else {
      maxPossible = mid;
      return maxPossible;
    }
  }
  return maxPossible;
}
//time is logn and space is  1;
// console.log(sqrtByPritam(7));
//1 2  3  4  5  6 7

//by STRIVER

function sqrtBrute(n) {
  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      return i;
    } else if (i * i > n) return i - 1;
  }
}
//time is approx  n and space is 1
// console.log(sqrtBrute(35));

function sqrtOptimal(n) {
  let low = 1;
  let high = n;
  let ans;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (mid * mid <= n) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }
  return ans;
  //return high ;
}
//time is logn and space is 1
console.log(sqrtOptimal(9));
