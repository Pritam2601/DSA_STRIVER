function minMax(arr) {
  let [min, max] = [Infinity, -Infinity];
  for (const ele of arr) {
    if (ele < min) min = ele;
    if (ele > max) max = ele;
  }
  return [min, max];
}

function checkPossible(arr, m, k, days) {
  let count = 0;
  let bouqFormed = 0;
  for (const bloomingDay of arr) {
    if (bloomingDay <= days) count++;
    else {
      bouqFormed += Math.floor(count / k);
      count = 0;
    }
  }
  bouqFormed += Math.floor(count / k);
  return bouqFormed >= m;
}

function minDaysBrute(arr, m, k) {
  if (m * k > arr.length) return -1;
  const [min, max] = minMax(arr);
  for (let day = min; day <= max; day++) {
    if (checkPossible(arr, m, k, day)) return day;
  }
}
//time  is   [max-min +1 ] * n  + n (for minMax)  and space is 1

function minDaysOptimal(arr, m, k) {
  let minDays = -1;
  if (m * k > arr.length) return minDays;
  let [low, high] = minMax(arr);
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (checkPossible(arr, m, k, mid)) {
      minDays = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return minDays;
}

//time is  log(max-min+1)* n  + n(for minMax) and space is 1 ;
