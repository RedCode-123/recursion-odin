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


function mergeSort(arr){
  if(arr.length === 0){
    return arr;
  }
  if(arr.length === 2 && arr[1] < arr[0]){
    return [arr[1], arr[0]]
  } else if(arr.length === 2 && arr[1] >= arr[0]){
    return [arr[0], arr[1]]
  }
  for(r = 0; r < arr.length; r++){
  for(x = 0; x < arr.length; x++){
    if(r==x) continue
    if((x+1) === arr.length) {
      [arr[0], arr[x]] = mergeSort([arr[0],arr[x]]);
    } else {
          [arr[x], arr[x+1]] = mergeSort([arr[x],arr[x+1]]);
    }
  }
  }

  return arr;
}

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

function merge() {
  //Merge
  let halfs = cutArrHalf(arr)
  // let tempArr=[];
   let halfl = [...halfs[0]];
   let halfr = [...halfs[1]];
      let i = 0, j = 0, k= 0;
  while(i < halfl.length && j < halfr.length){
      if(halfl[i] < halfr[j]) {
          halfs[k] = halfl[i];
          i++;
      } else {
          halfs[k] = halfr[j];
          j++;

      }
      k++;
  }
  if(halfl.length > halfr.length) {
      halfs[halfl.length-1] =  halfl[halfl.length-1];
  }
    return [...halfl,...halfr];
}

function sort(arr){
  //base case
  if(arr.length === 1){
    // console.log(arr)
    return arr;
  } else {
      let mergeArr = mergeSort(arr);
      merge(mergeArr);
  }
}

let arr1 = [8,230,756, 777, 611, 10, -78, -15];
console.log(
    "Merge sort (Even array):\n",
    mergeSort(arr1)
)

let arr2 = [-8, -273,56, 77, 11, 18, 93];
console.log(
    "Merge sort (odd array):\n",
    mergeSort(arr2)
)
