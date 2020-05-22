
// 0  1  2  3  4  5  6   7   8   9  10  11   12
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
let count1 = 0;
function fibonacciRecursive(number) { // 0(2^n)
  count1++;
  if (number <= 1) {
    return number;
  }
  if (number === 2) {
    return 1;
  }
  return fibonacciRecursive(number - 2) + fibonacciRecursive(number - 1);
}

// 0  1  2  3  4  5  6   7   8   9  10  11   12
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
let count2 = 0;
function fibonacciIterative(number) {//O(n)
  let arr = [0, 1];
  for (let i = 2; i <= number; i++) {
    count2++;
    arr[i] = arr[i-2] + arr[i-1];
  }
  return arr[number];
}

// 0  1  2  3  4  5  6   7   8   9  10  11   12
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
let count3 = 0;
function fibonacciDynamic() { // 0(n)
  let cache = {};
  return function fib(number) {
    if (!(number in cache)) {
      count3++;
      if (number <= 1) {
        return number;
      }
      if (number === 2) {
        return 1;
      }
      cache[number] = fib(number - 2) + fib(number - 1);
      
    }
    return cache[number];
  }
}

console.log("Recursive", fibonacciRecursive(35), "Operations: " + count1);
console.log("Iterative", fibonacciIterative(35), "Operations: " + count2);
fib3 = fibonacciDynamic();
console.log("Dynamic", fib3(35), "Operations: " + count3);
