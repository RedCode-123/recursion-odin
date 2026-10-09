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
  for(let y = 0; y < arr.length; y++) {
     for(let x = 0; x < arr.length-2; x++){
      [arr[x], arr[x+1]] = mergeSort([arr[x], arr[x+1]]);
    }
     for(let z = arr.length-1; z >= 1 ; z--){
      [arr[z-1], arr[z]] = mergeSort([arr[z-1], arr[z]]);
    }
  }

  return arr;
}

console.log("Sorting array elements:\n",
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) // [0, 1, 1, 2, 3, 5, 8, 13]
);
