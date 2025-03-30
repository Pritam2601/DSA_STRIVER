function findPeakElementBrute(arr) {
  let n = arr.length;
  // if (n === 1 || arr[0] > arr[1]) return 0;
  // if (arr[n - 1] > arr[n - 2]) return n - 1;
  //jst look how beautifully aboves edge cases handlers are managed
  for (let i = 0; i < n; i++) {
    if (
      (i === 0 || arr[i] > arr[i - 1]) && //kinda saying if first element then pls skip left checking as if does not HAVE
      (i === n - 1 || arr[i] > arr[i + 1])
    )
      return i;
  }
}
//time is n and space is 1
// console.log(findPeakElementBrute([1, 2, 1, 3, 5, 6, 4])); //ans is 5

function findPeakElementOptimal(arr) {
  let n = arr.length;
  //these edge case handlers makes sure that upto array of length 2 they can handle so that
  //main BS needs to deal with array of length >=3 so no problem for doing arr[mid+1] or arr[mid-1]
  if (n === 1 || arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
    else if (arr[mid] > arr[mid - 1]) low = mid + 1; //increasing half
    else {
      //decreasing half
      //condn is arr[mid - 1] > arr[mid]
      high = mid - 1;
    }
  }
}
//time is logn and space is 1
// console.log(findPeakElementOptimal([1, 5, 1, 2, 1]));

//imp to note this in q it is given that arr[i]!==arr[i+1] for every i ...now think why ?
