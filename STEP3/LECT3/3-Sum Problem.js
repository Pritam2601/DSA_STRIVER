const arr = [-1, 0, 1, 2, -1, -4];

function has(arr, triplet) {
  // here time is approx x**2 where x  is num of triplet
  //mano ans mein 2 hai toh third k liye 2 baar comparison and so on we assume x k liye x baar linear search
  //actually it is (x-1)/2 * (1+x-1)
  for (const item of arr) {
    if (String(item) === String(triplet)) return true;
  }
  return false;
}
function threeSumBrute(arr) {
  const n = arr.length;
  const ans = [];
  for (let i = 0; i < n - 2; i++) {
    // runs for n-2 time
    for (let j = i + 1; j < n - 1; j++) {
      let sum = arr[j] + arr[i];
      for (let k = j + 1; k < n; k++) {
        if (sum + arr[k] === 0) {
          const triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          if (!has(ans, triplet)) ans.push(triplet);
        }
      }
    }
  }

  return ans;
}
//time is approx n**3 + x**2  and space is 1 .
// console.log(threeSumBrute(arr));

//************************************************************************************************************************************ */
function threeSumBetter(arr) {
  const n = arr.length;
  const ans = [];
  const st = new Set(); // and space is assume n

  for (let i = 0; i < n - 2; i++) {
    //here n-3 but assume n

    for (let j = i + 1; j < n; j++) {
      // here also assume n which is not for sure
      let req = arr[i] + arr[j];
      req = req === 0 ? 0 : -req; //issue in js as it consider -0 as -0 and not jst 0 so that is why if req is 0 then req is 0 and not -0

      if (st.has(req)) {
        //logn
        const triplet = [arr[i], arr[j], req].sort((a, b) => a - b);
        if (!has(ans, triplet)) ans.push(triplet);
      }

      st.add(arr[j]); //logn is time
    }

    st.clear();
  }

  return ans;
}

//time is (n**2 )* 2logn + x**2  and  space is n  ;
// console.log(threeSumBetter(arr));

//************************************************************************************************************************************ */

function check(arr, triplet) {
  if (arr.length === 0) return false;
  return String(arr.at(-1)) === String(triplet);
}
function threeSumOptimal(arr) {
  const n = arr.length;
  const ans = [];
  let count = 0;
  // const arr = [-1, 0, 1, 2, -1, -4];
  for (let i = 0; i < n; i++) {
    while (arr[i] === arr[i - 1] && i >= 1) i++;

    //assume time is n
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      // assume time is n
      const sum = arr[i] + arr[j] + arr[k];

      if (sum === 0) {
        // const triplet = [arr[i], arr[j], arr[k]];
        // if (!check(ans, triplet)) ans.push(triplet);
        ans.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (arr[j] === arr[j - 1] && j < k) j++;
        while (arr[k] === arr[k + 1] && k > j) k--;
      } else if (sum < 0) {
        j++;
        while (arr[j] === arr[j - 1] && j < k) j++;
      } else {
        k--;
        while (arr[k] === arr[k + 1] && k > j) k--;
      }

      count++;
    }
  }
  console.log(count);

  return ans;
}
// 54
// [ [ -2, 0, 2 ], [ -1, -1, 2 ], [ 0, 0, 0 ] ]

//total time is n**2 and nlogn for sorting
//space is jst n for giving that ans otherwise it is 1 and here it is good than better sol
const arr2 = [-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2];
console.log(threeSumOptimal(arr2));

//--------------------------------
//notes -

//N1   see this q
// Given an array arr[] of distinct integers of size n and a value sum, the task is to find the count of triplets (i, j, k), having (i<j<k)
// with the sum of (arr[i] + arr[j] + arr[k]) smaller than the given value sum.
//my ans is triplet becomes duplicate
// 1.when array have duplicate ele eg [1,2,3,4,4,5]  tiplet with sum 10 are 1 4 5 and 1 4 5
//2. when we count from both way LR and RL for eg 1 2 3 and 3 2 1 ...are triplet with sum 6
//so q is saying count all unique triplet in the other way

//N2  see this q
// Given an array arr, return true if there is a triplet (a, b, c) from the array (where a, b, and c are on different indexes) that
//  satisfies a2 + b2 = c2, otherwise return false.
//here we want all triplet such that eq holds good ...okay ...and we can get that when we fix the biggest one and adjust two smaller one
//and if we fix one samller and adjust one smaller and that biggest then we may loose applicable triplet ;

//N3 ...
//striver all algo actually fits when triplets elements order does not matter like a + b + c =0 here b c a and c a b are all okay !
//but striver fails when elements should hold this type of eq ... a + b = c ...here u r not thinking or deciding which one is a , b and c
//espically the second better sol fails miserably ;
