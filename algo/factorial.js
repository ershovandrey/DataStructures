function findFactorialRecursive(number) { //O(n)
  if (number < 0) {
    return NaN;
  }
  if (number <= 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) { //O(n)
  let answer = number;
  if (number < 0) {
    return NaN;
  }
  if (number <= 2) {
    return number;
  }
  while (number > 1) {
    answer = answer * (number - 1);
    number--;
  }

  return answer;
}


console.log(0, findFactorialRecursive(0));
console.log(0, findFactorialIterative(0));
console.log(1, findFactorialRecursive(1));
console.log(1, findFactorialIterative(1));
console.log(2, findFactorialRecursive(2));
console.log(2, findFactorialIterative(2));
console.log(3, findFactorialRecursive(3));
console.log(3, findFactorialIterative(3));
console.log(4, findFactorialRecursive(4));
console.log(4, findFactorialIterative(4));
console.log(15, findFactorialRecursive(15));
console.log(15, findFactorialIterative(15));