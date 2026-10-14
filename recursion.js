#!/usr/bin/node

function fibo(n){
  if(n < 2) {
    return n;
  }
  return fibo(n-2) + fibo(n-1);
}

function fiboarr(n) {
  let  arr =[];
  for(let x = 0; x < n; x ++){
    arr.push(fibo(x));
  }
  return arr;
}

console.log("fibonacci using iteration and recursion:\n",fiboarr(8))


function fibonacciGenerator (n) {
    n--; // Tenemos que quitarle uno ya que los arrays incian desde cero
    let arrayFibo = [0];
    function fibo(num) {
      if(num === 0){
            return 0;
      } else if(num === 1) {
          arrayFibo[1] = 1;
            return 1;
      }
      arrayFibo[num] = fibo(num-2) + fibo(num-1);
      return fibo(num-2) + fibo(num-1);
    }

    fibo(n);
    return arrayFibo;
}
console.log("Fibonacci using only recursion:\n",fibonacciGenerator(8))


// function mergeSort(arr){
//   if(arr.length === 0){
//     return arr;
//   }
//   if(arr.length === 2 && arr[1] < arr[0]){
//     return [arr[1], arr[0]]
//   } else if(arr.length === 2 && arr[1] >= arr[0]){
//     return [arr[0], arr[1]]
//   }
//   for(r = 0; r < arr.length; r++){
//   for(x = 0; x < arr.length; x++){
//     if(r==x) continue
//     if((x+1) === arr.length) {
//       [arr[0], arr[x]] = mergeSort([arr[0],arr[x]]);
//     } else {
//           [arr[x], arr[x+1]] = mergeSort([arr[x],arr[x+1]]);
//     }
//   }
//   }

//   return arr;
// }

console.log("-".repeat(60));

function cutArrHalf(arr){
  let leftSide, rightSide
  // split arr
  if(arr.length%2 === 0){
    let half = arr.length/2;
    leftSide = arr.slice(0, half);
    rightSide = arr.slice(half);
  } else {
    let extra= arr.length%2;
    let unevenHalf = ((arr.length-extra)/2)+1
    leftSide = arr.slice(0, unevenHalf);
    rightSide = arr.slice(unevenHalf);
  }
  return [leftSide, rightSide]
}


function mergeSort(arr){
    // console.log(arr)
  if(arr.length === 1){
    return arr;
  }  else {

  let halfs = cutArrHalf(arr)
    // console.log(halfs)
    halfs = [mergeSort(halfs[0]), mergeSort(halfs[1])]
   let halfl = halfs[0];
   let halfr = halfs[1];
    let tempArr = []
    let i = 0, j = 0 //, k= 0;
      while(i <=halfl.length && j <= halfr.length){

        if (i === halfl.length) {
          tempArr.push(...halfr.slice(j))
          j++;
        break
      }else if (j === halfr.length) {
          tempArr.push(...halfl.slice(i))
          i++;
          break
      }

      if(halfl[i] < halfr[j]) {
          // halfs[0] = halfl[i];
          tempArr.push(halfl[i])
          i++;
      } else if(halfl[i] > halfr[j]){
          // halfs[1] = halfr[j];
          tempArr.push(halfr[j])
          j++;

      }
  }
  //if(halfl.length > halfr.length) {
      // halfs[0][halfl.length-1] =  halfl[halfl.length-1];
       // tempArr.push(halfl[halfl.length-1])
 // }
      return tempArr ;

  }
}

let arr1 = [8,3,756, 77, 611, 10, -78, -15];
console.log(
    "Merge sort (Even array):\n",
    mergeSort(arr1)
)

let arr2 = [-8, -273,56, 77, 11, 18, 93];
console.log(
    "Merge sort (odd array):\n",
    mergeSort(arr2)
)
