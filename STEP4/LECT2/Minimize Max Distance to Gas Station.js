//whole funda of this q is try to place one  gasStation in one go and place where diff is max ..
//that is all and u cannot place in extreme left or right as max is still between original positions

function maxDiff(arr, insertedEle) {
  let max = 0;
  let maxIndex = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = (arr[i + 1] - arr[i]) / (insertedEle[i] + 1);

    if (diff > max) {
      max = diff;
      maxIndex = i;
    }
  }
  return [maxIndex, max];
}

function findSmallestMaxDistBrute(arr, k) {
  const insertedEle = Array(arr.length - 1).fill(0);
  while (k > 0) {
    insertedEle[maxDiff(arr, insertedEle)[0]]++;
    k--;
  }

  const ans = maxDiff(arr, insertedEle)[1];
  return parseFloat(ans.toFixed(2));
}

//time is k * n + n(for finding the final ans ) and space is n-1 for tracking how many ele inserted at each index
// console.log(findSmallestMaxDistBrute([1, 2], 199));

//will make use of priority Queue
function findSmallestMaxDistBetter(arr, k) {
  const PriorityQueue = require("js-priority-queue");
  const pq = new PriorityQueue({
    comparator: (a, b) => b[0] - a[0] || b[1] - a[1],
  }); // Min Heap

  const n = arr.length;
  const insertedEle = Array(n - 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    pq.queue([arr[i + 1] - arr[i], i]);
  }

  while (k > 0) {
    const index = pq.peek()[1];
    pq.dequeue();
    insertedEle[index]++;
    const newLength = (arr[index + 1] - arr[index]) / (insertedEle[index] + 1);
    pq.queue([newLength, index]);
    k--;
  }

  return pq.peek();
}

// 1. n-1*log(n-1) for pushing  n-1 in pq
// 2 . k *  2*log(n-1)
//total time is step1+step2 and space is n-1 for tracking and (n-1)*2(2 length array) for storing in pq
console.log(findSmallestMaxDistBetter([1, 13, 17, 23], 5));
