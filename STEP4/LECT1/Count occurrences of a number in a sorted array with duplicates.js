//jst above module is same and it is jst an small extn of that
class Solution {
  firstOcc(arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let first = -1;
    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (arr[mid] > target) {
        high = mid - 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        first = mid;
        high = mid - 1;
      }
    }
    return first;
  }
  lastOcc(arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let last = -1;
    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (arr[mid] > target) {
        high = mid - 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        last = mid;
        low = mid + 1;
      }
    }
    return last;
  }
  countFreq(arr, target) {
    const first = this.firstOcc(arr, target);
    if (first === -1) return 0;
    return this.lastOcc(arr, target) - first + 1;
  }
}

const o = new Solution();
console.log(o.countFreq([1, 1, 2, 2, 2, 2, 3], 11)); //4 is ans
