//range is [max(arr) , sum(arr)] correspomding to this num of students is [arr.length , 1]

function maxAndSum(arr) {
  let [max, sum] = [-Infinity, 0];
  for (const ele of arr) {
    if (ele > max) max = ele;
    sum += ele;
  }
  return [max, sum];
}

//25 46 28 29 24
function chilren(arr, max) {
  let sum = 0;
  let child = 1;
  for (const ele of arr) {
    if (sum + ele <= max) {
      sum += ele;
    } else {
      child++;
      sum = ele;
    }
  }

  return child;
}
function findPages(arr, students) {
  if (students > arr.length) return -1;
  let [low, high] = maxAndSum(arr);

  let ans = low; //at this no of stud is n ;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const numChildren = chilren(arr, mid);
    console.log(numChildren, mid);

    if (numChildren > students) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
//time is  log(sum-max+1)*n + n(for maxAndSum) and space is 1 ;
console.log(findPages([50, 50, 50, 50], 3)); //ans is  113

//conflict  jst look at this test case [15, 10, 19, 10, 5, 18, 7], 5
//here asked to allocate for 5 but for maxPages(students) 24 (6) 25(4) so for any
//maxPages students is not excatly 5 but but 25 which is allocating to 4 students is valid ;
//reason is this it can be increased to 5 ..breaking a group of more than 1 books into 2 or more ;
//but greater than k cannot be reduced to any which is less than right now!
// students which can be allocated are 7 6 5 4 3 2 1 so 5 is there so it is very nrml that arrangement will be there for 5 too
