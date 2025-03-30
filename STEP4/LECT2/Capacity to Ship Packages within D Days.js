function maxAndSum(arr) {
  let [max, sum] = [-Infinity, 0];
  for (const ele of arr) {
    if (ele > max) max = ele;
    sum += ele;
  }
  return [max, sum];
}

function daysTaken(weights, capacity) {
  let days = 0;
  let sum = 0;
  for (const weight of weights) {
    sum += weight;
    if (sum > capacity) {
      days++;
      sum = weight;
    } else if (sum === capacity) {
      days++;
      sum = 0;
    }
  }
  if (sum) days++; //covering the last case
  return days;
}

function shipWithinDays(weights, days) {
  // let low =  max(weights) ;   //days req is weights length  even provided more days than this yet min capcity will be this low ;
  // let high = sum of all ;     //days req is  1

  let [low, high] = maxAndSum(weights);
  let ans = high;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (daysTaken(weights, mid) <= days) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
//time is log(sum of all - max of weights +1) * n  + n and space is 1
console.log(shipWithinDays([3, 3, 3, 3, 3, 3], 2)); //9

function daysTakenStriver(weights, capacity) {
  let days = 1;
  let load = 0;
  for (const weight of weights) {
    if (load + weight > capacity) {
      days++;
      load = weight;
    } else {
      load += weight;
    }
  }

  return days;
}
