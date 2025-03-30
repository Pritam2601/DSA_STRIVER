const arr = [1, 1, 1, 3, 3, 2, 2, 2];

//NOTE here we need to use hashMap when the arr[i] goes beyond 10**7 or **6
function majorityElementBetter(arr) {
  const hashMap = [];
  const limit = Math.floor(arr.length / 3);
  const ans = [];

  for (const ele of arr) {
    if (ans[0] === ele) continue;
    hashMap[ele] = hashMap[ele] === undefined ? 1 : hashMap[ele] + 1;
    if (hashMap[ele] > limit) ans.push(ele);
  }
  console.log(hashMap);
  return ans;
}
// console.log(majorityElementBetter(arr));

function majorityElementOptimal(arr) {
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;
  for (const item of arr) {
    if (count1 === 0 && item !== candidate2) {
      count1 = 1;
      candidate1 = item;
    } else if (count2 === 0 && item !== candidate1) {
      count2 = 1;
      candidate2 = item;
    } else if (item === candidate1) count1++;
    else if (item === candidate2) count2++;
    else {
      count1--;
      count2--;
    }
  }

  (count1 = 0), (count2 = 0);
  for (const item of arr) {
    if (candidate1 === item) count1++;
    if (candidate2 === item) count2++;
  }
  const limit = Math.floor(arr.length / 3);
  const ans = [];
  if (count1 > limit) ans.push(candidate1);
  if (count2 > limit) ans.push(candidate2);

  return ans;
}

//here time is N and N  so 2*N and space is 1
console.log(majorityElementOptimal(arr));
