//pattern yupp it is based on answers but specifically based on min(max) or max(min)
//have to tell the minimum distance between any two cows that is maximum

//range is [1,max(stalls)-min(stalls)]
//if cows inc  then min dist will dec ;  see below chart
//cows     minDist
// 2        max-min
//n          1 ;
//here u can inc the lower bound from 1 to min  diff of  two adjacent stalls of  stalls array

//for this function to work , it needs sorted stalls .. reason ?
//ans ; suppose we have stalls 1 8  3  4 9 now need to check  3 cows  at minDist of 4
//first u place it at 1 and then at 8 and then at 4? are u sure ? u r not as if u do then u will have prob with  1
//so sorting ensure u cannot put any third cow between already 2  chosen cows
function checkPossible(stalls, cows, minDist) {
  let lastCow = 0;
  cows--;
  for (let i = 1; i < stalls.length; i++) {
    while (stalls[i] - stalls[lastCow] < minDist && i < stalls.length) {
      i++;
    }
    if (i === stalls.length) break;
    lastCow = i;
    cows--;
  }

  return cows <= 0;
}

function checkPossibleStriver(stalls, cows, minDist) {
  let lastCow = 0;
  cows--;
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - stalls[lastCow] >= minDist) {
      cows--;
      lastCow = i;
      if (cows === 0) return true;
    }
  }
  return false;
}

function minAdjacentDiff(arr) {
  //arr is sorted
  let diff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const possibleDiff = arr[i] - arr[i - 1];
    if (possibleDiff < diff) diff = possibleDiff;
  }
  return diff;
}

function aggressiveCowsOptimal(stalls, cows) {
  let n = stalls.length;
  stalls.sort((a, b) => a - b);

  let low = minAdjacentDiff(stalls);
  let high = stalls[n - 1] - stalls[0];

  let ans = low;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const isPossible = checkPossible(stalls, cows, mid);
    if (isPossible) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

//time is log([max-min] - low + 1 )* n + n(for calc low) + nlogn(for sorting)
console.log(aggressiveCowsOptimal([7, 13, 11], 3)); //ans is 2
