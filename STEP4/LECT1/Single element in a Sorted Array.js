function singleNonDuplicateBrute(arr) {
  const n = arr.length;
  //these 2 lines FOR EDGE CASES
  if (n === 1 || arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return arr[i];
  }
}
//time is n and  space is 1
// console.log(singleNonDuplicateBrute([1, 1, 3, 3, 4, 5, 5, 6, 6]));

function singleNonDuplicateOptimal(arr) {
  const n = arr.length;

  if (n === 1 || arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];
  //writing thoses edge cases we left fist and last ele
  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    //step 1
    // if (mid % 2 === 0 && arr[mid + 1] !== arr[mid] && arr[mid - 1] !== arr[mid])
    //   return arr[mid];
    if (arr[mid + 1] !== arr[mid] && arr[mid - 1] !== arr[mid]) return arr[mid];
    //step2
    // else if (mid % 2 === 0) {
    //   if (arr[mid] === arr[mid + 1]) {
    //     low = mid + 2;
    //   } else {
    //     high = mid - 2;
    //   }
    // } else {
    //   if (arr[mid] === arr[mid + 1]) {
    //     high = mid - 1;
    //   } else {
    //     low = mid + 1;
    //   }
    // }
    else if (
      (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
      (mid % 2 === 1 && arr[mid] === arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

//time is logn and space is 1
//hey commented lines are by me and actual code by striver and pls see and try to learn how can we do this of code
//learning PART is always think how can u reduce if else such that there is no need to write else if but else only
// console.log(singleNonDuplicateOptimal([3, 3, 4, 4, 5, 6, 6]));
