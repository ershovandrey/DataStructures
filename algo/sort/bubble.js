module.exports = function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < length; j++) {
      if (arr[j-1] > arr[j]) {
        let tmp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = tmp;
      }
    }
    length--;
  }
  return arr;
}