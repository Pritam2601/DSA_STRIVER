function minInRoatatedArrayOptimal(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  // return arr[high]   it is also same ;
  return arr[low];
}

//time is logn and space is 1;
// console.log(minInRoatatedArrayOptimal([7, 1]));

function minInRoatatedArrayOptimalStriver(arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = Infinity;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    //an optimization
    //it simply means we have found a search space that is sorted from start to end
    //for exx [1 2  3 ]
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }
    if (arr[low] <= arr[mid]) {
      //sorted part
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    }
    //if the left one is not sorted then the right one will be for sure
    else {
      //cond is arr[mid]<= arr[high];
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}
//time is logn and space is 1;
// console.log(minInRoatatedArrayOptimalStriver([4, 5, 6, 7, 1, 2, 3]));
//stiver says - > jo sorted part of array usme min ho bhi sakta hai ya nahi bhi for example
// 4  to 7 sorted but no minimum
// but in array [1,2] 1 is sorted and 2 is also sorted but first part which is sorted has the min
//so we will still elminate the sorted part taking its mini ele with a hope what if it was that min

console.log(minInRoatatedArrayOptimalStriver([5, 6, 1, 2, 3, 4]));
