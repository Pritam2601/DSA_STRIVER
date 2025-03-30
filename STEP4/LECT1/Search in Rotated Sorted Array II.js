//this q is same as prev one but having duplicates makes it diff
//see this case [1,0,1,1,1] here prev sol will FAIL

function binarySearchInRotatedArr(arr, target) {
  //it is game of rejection
  //ELIMINATION IS THE KEY so try your hell to elminate one half about which u are 100% SURE
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] === arr[low]) {
      low++;

      continue;
    }

    //striver included this shit of code but leetcode says that u may skip that tooo;
    // if (arr[high] === arr[mid]) {
    //   high--;
    //   continue;
    // }
    //why ? let me explain for u
    //see this example 1 0 1  1 1 problem tb hoti hai jb yeh confusion hone lage ki arr[low]===arr[mid]
    //yahan index 2 index 0 hai wah probelm RIGHT ? aur yeh problem humne solve bhi kri upar low-- krke
    //abb note kro ki yeh prob tabhi aaati hai jb low eq hota hai mid k aur humare tarike yeh aise hata jata hai
    //ki humare pass kewal ek sorted array bachta hai yahan wah hai 0 1  1 1

    //means left one is sorted
    else if (arr[low] <= arr[mid]) {
      //for dulicates

      //if ele is there then accept this half
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      }
      //OTHERWISE reject
      else {
        low = mid + 1;
      }
    }

    //means RIGHT ONE IS SORTED
    else {
      //if ele is there then accept this half
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      }
      //OTHERWISE reject
      else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
//in worst cond time goes to n
//[3,3,3,3,3,3,1,3]   here we will perform binary s  over jst 3  1 3  that is approx for n times we jst were in a loop
//space is  1
console.log(binarySearchInRotatedArr([1, 0, 1, 1, 1], 0));
