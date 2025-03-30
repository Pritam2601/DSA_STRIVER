//def of lower bound and upper bound as well ;
// Lower bound: Where you would insert x in a sorted list without breaking order.
//        smallest i such that arr[i]>=x
// Upper bound: The first seat where a taller person than x is sitting in a lineup
//       smallest i such that arr[i] > x [strictly]

const arr = [1, 2, 3, 3, 7, 8, 9, 9, 9];

//THIS CODE (jst below) NEEDS IMPROVEMENT
function lowerBound(arr, x) {
  //possible cases
  //1. when x is there then we have to check if duplicates are there then we need to return the first of THOSE
  //2. when x is not there then binary serach will try to find jst smallest and as it is not there then low will store the ans ! how? THINK

  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(high + (low - high) / 2);
    if (x < arr[mid]) {
      high = mid - 1;
    } else if (x > arr[mid]) {
      low = mid + 1;
    } else {
      //case 2 covered
      if (mid > low && arr[mid] === arr[mid - 1]) high = mid - 1;
      else return mid;
    }
  }
  //case 1 covered
  return low;
}
//time is logn  and space is 1;
// console.log(lowerBound(arr, 10));

function lowerBoundStriver(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    const mid = Math.floor(high + (low - high) / 2);
    if (arr[mid] >= x) {
      ans = mid; //may be the answer
      high = mid - 1; //move left of mid in the greed of smallest possible index which may too have smallest arr[i]
    } else {
      //[1,2] and x  = 300
      low = mid + 1;
    }
  }
  return ans;
}

console.log(lowerBoundStriver(arr, 9));

//if u wanna know how the above function work means how the fuck it is answering so correctly ;
//if u think very deep then u will see that ans is set ONLY when cond is true and else part is trimming down
//that array part which is not req and in next iteration if if part holds TRUE then fine otherwise
//else part will trim down AGAIN and so on ;
