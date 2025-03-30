const arr = [1, 1, 0, -1, 0, -2, 2];
function has(arr, quad) {
  for (const item of arr) {
    if (String(item) === String(quad)) return true;
  }
  return false;
}
function fourSumBrute(arr) {
  const n = arr.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          const sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === 0) {
            const quad = [arr[i], arr[j], arr[k], arr[l]];
            quad.sort((a, b) => a - b);

            if (!has(ans, quad)) ans.push(quad);
          }
        }
      }
    }
  }

  return ans;
}
//time is n **4  and no of quad **2 for checking it is there or not
//space is  no of quad
// console.log(fourSumBrute(arr));

function fourSumBetter(arr) {
  let n = arr.length;
  const st = new Set();
  const ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let req = -(arr[i] + arr[j] + arr[k]);

        if (st.has(req)) {
          const quad = [arr[i], arr[j], arr[k], req];
          quad.sort((a, b) => a - b);
          if (!has(ans, quad)) ans.push(quad);
        }
        st.add(arr[k]);
      }
      st.clear();
    }
  }

  return ans;
}
//here time will be n**3 x 2logn  + x **2 for checking for its duplication
//and space will be n for storing all n ele of arr in set AND no of quad while giving ans ...so x + n

// console.log(fourSumBetter(arr));

//

function fourSumOptimal(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < n; i++) {
    while (arr[i] === arr[i - 1] && i > 0) i++;
    for (let j = i + 1; j < n; j++) {
      //                    2  1  1 2 ....
      while (arr[j] === arr[j - 1] && j > i+1) j++; //if u doubt here why? i  j              now think do not u think k and l have range from 1 to end for this j so a quad is possible then it has become a part and now u if select the next 1 as j then k and l will have range from 2 to end so what is the point .of repeating with taking a lesser range
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        const sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum > 0) {
          l--;
          while (arr[l] === arr[l + 1] && k < l) l--;
        } else if (sum < 0) {
          k++;
          while (arr[k] === arr[k - 1] && k < l) k++;
        } else {
          ans.push([arr[i], arr[j], arr[k], arr[l]]);
          l--;
          k++;
          while (arr[k] === arr[k - 1] && k < l) k++;
          while (arr[l] === arr[l + 1] && k < l) l--;
        }
      }
    }
  }
  console.log(5);
  return ans;
}
//time is n**3  + nlogn(for sorting the array )
//space is jst x that is no of QUADS

//          in better              vs in optimal
//time      n**3 * 2logn + x**2      n**3 + nlogn
//space      n for set               no set involved
console.log(fourSumOptimal(arr));
