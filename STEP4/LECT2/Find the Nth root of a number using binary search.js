// n = 4  and m = 64
// 1 * 1 * 1 * 1 = 1
// 2 * 2 * 2* 2= 16
//3 * 3 * 3 * 3 = 81
//...greater than 64 ofc
//so there is no number between 1 and 64 such that that number x ** 4 === 64 in this case return -1 ;

//def of nth root of m
// which number(x) is between 1 and m such that if we do x * x* x * ...n times === m

function nthRootBrute(n, m) {
  for (let i = 1; i <= m; i++) {
    if (i ** n === m) {
      return i;
    } else if (i ** n > m) {
      return -1;
    }
  }
}

//time is m* n  and this extra logn because we are trying to find i ** n
//and same above time can be reduced to m * logn if we use another method for finding i**n
//NOTE i m using JS way for finding i**n and so they may take logn for that same and not n
//   ( worst case --> when n =1 and m = whatever!)
// and space is 1
// console.log(nthRootBrute(1, 27));

function nTimes(x, n) {
  if (n === 0) return 1; // Base case: anything^0 is 1

  let halfPower = nTimes(x, Math.floor(n / 2)); // Recursively compute x^(n/2)

  if (n % 2 === 0) {
    return halfPower * halfPower; // If n is even: x^n = (x^(n/2))^2
  } else {
    return halfPower * halfPower * x; // If n is odd: x^n = (x^(n/2))^2 * x
  }
}

function nthRootOptimal(n, m) {
  let low = 1;
  let high = m;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (nTimes(mid, n) > m) high = mid - 1;
    else if (nTimes(mid, n) < m) low = mid + 1;
    else return mid;
  }
  return -1;
}
//time is logn[for calc nTimes] * logm [for loop]
//space is 1
console.log(nthRootOptimal(2, 18));

//---------------------FOR LANG OTHER THAN PYTHON AND JS ----------------
//a function that helps when u face overflow while calc nTimes(mid,n) ;
//first why happens suppose we have mid as (10**9 + 1 )/2   and n = 10
//so mid ** n will be 10**90 approx ...so huge!!! let's solve

//if mid**n === m return 0
//if        < m return  1
//if        >m return 2
function nTimesSafe(mid, n, m) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= mid;
    if (ans > m) return 2;
  }
  if (ans === m) return 0;
  return 1;
}
