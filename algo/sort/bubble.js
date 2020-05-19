module.exports = function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < length; j++) {
      if (arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
      }
    }
    length--;
  }
  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}