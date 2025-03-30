//question piles = [3,6,7,11], h = 8
//k is speed of eating bananas per hr so
//if k is low then time will be high and vice versa
//k range is  1 to max of piles array -- > (k) [1 , 11] --> time [27hrs , 4hrs]
//       now this range of 1 and 11 is a clear indication of BS as ans falls in this range only
//we have given 8 hrs then what is k
// abb agr time 27hrs se jyada de de toh bhi 1 hi hoga k as 1 toh kahega hi in one 1hr

//imp points about edge cases :--------------------
//1.) u will  be provided h such that which is more than req suppose in above case h = 300 then k will be still 1 as asked min and no means of that extra time means beyond 27hrs
//2.) idk how at many speed k ,, time is same ..this is example  [1, 1, 1, 999999999] h =10 ;
//ans of p2) 3hrs is fixed for 1  1  1 and rest 7 hrs can be acheived when u divide this 999999999 by 142857144 or 142857143 and many more --  basic maths
//Math.ceil(16 / 15 ) === 2    and Math.ceil(16 / 15 )  ===  2  and Math.ceil(16 / 15 ) ===  2 kehne ka mtlb 16 banana 15 k speed se kaho 2 hrs lagega .. 11 k speeed se toh bhi 2hrs ...
function timeTaken(piles, k) {
  let time = 0;
  for (const pile of piles) {
    time += Math.ceil(pile / k);
  }
  return time;
}

function max(piles) {
  let max = -Infinity;
  for (const pile of piles) {
    if (pile > max) max = pile;
  }
  return max;
}

function fn(piles, h) {
  let low = 1;
  let high = max(piles);
  //range is low and high
  let k;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const time = timeTaken(piles, mid); //mid is no of bananas per hr
    // console.log(`speed is ${mid} and time is ${time}`);

    if (time <= h) {
      k = mid;
      high = mid - 1; //have more time , decre the speed k so move left
    } else low = mid + 1;
  }
  return k;
}

//time is log(max of piles) * piles.length + piles.length (for finding max )
// console.log(fn([1, 1, 1, 999999999], 10)); // ans is 142857143

//---------------------------------------------------------STRIVER-------------------------------
const piles = [1, 1, 1, 999999999];
const h = 10;
function minEatingSpeedBrute(piles, h) {
  const maxK = max(piles);
  for (let k = 1; k <= maxK; k++) {
    if (timeTaken(piles, k) <= h) {
      return k;
    }
  }
}
//time is max(piles) * piles.length ;
// console.log(minEatingSpeedBrute(piles, h));

function minEatingSpeedOptimal(piles, h) {
  let low = 1;
  let high = max(piles);
  let k = high; //at this speed h needs to be minimum length of the piles ...
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const time = timeTaken(piles, mid);
    if (time <= h) {
      k = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return k;
}
//time is log(max(piles)) * piles.length and space is 1 ;
console.log(minEatingSpeedOptimal(piles, h));
