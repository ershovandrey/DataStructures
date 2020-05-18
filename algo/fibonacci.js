
// 0  1  2  3  4  5  6   7   8   9  10  11   12
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

function fibonacciRecursive(number) { // 0(2^n)
  if (number <= 1) {
    return number;
  }
  if (number === 2) {
    return 1;
  }
  return fibonacciRecursive(number - 2) + fibonacciRecursive(number - 1);
}

console.log(0, fibonacciRecursive(0));
console.log(1, fibonacciRecursive(1));
console.log(2, fibonacciRecursive(2));
console.log(3, fibonacciRecursive(3));
console.log(4, fibonacciRecursive(4));
console.log(5, fibonacciRecursive(5));
console.log(6, fibonacciRecursive(6));
console.log(7, fibonacciRecursive(7));
console.log(8, fibonacciRecursive(8));
console.log(9, fibonacciRecursive(9));
console.log(10, fibonacciRecursive(10));
console.log(11, fibonacciRecursive(11));
console.log(12, fibonacciRecursive(12));
console.log(13, fibonacciRecursive(13));


// 0  1  2  3  4  5  6   7   8   9  10  11   12
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
function fibonacciIterative(number) {//O(n)
  let arr = [0, 1];
  for (let i = 2; i <= number; i++) {
    arr[i] = arr[i-2] + arr[i-1];
  }
  return arr[number];
}

console.log(0, fibonacciIterative(0));
console.log(1, fibonacciIterative(1));
console.log(2, fibonacciIterative(2));
console.log(3, fibonacciIterative(3));
console.log(4, fibonacciIterative(4));
console.log(5, fibonacciIterative(5));
console.log(6, fibonacciIterative(6));
console.log(7, fibonacciIterative(7));
console.log(8, fibonacciIterative(8));
console.log(9, fibonacciIterative(9));
console.log(10, fibonacciIterative(10));
console.log(11, fibonacciIterative(11));
console.log(12, fibonacciIterative(12));
console.log(13, fibonacciIterative(13));