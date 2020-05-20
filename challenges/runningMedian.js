// Find the running median using Heaps
// https://www.hackerrank.com/challenges/ctci-find-the-running-median/problem?h_r=internal-search
// https://leetcode.com/problems/find-median-from-data-stream/


const BinaryHeap = require('../ds/BinaryHeap');
const minHeap = new BinaryHeap(false);
const maxHeap = new BinaryHeap(true);
function runningMedian(a) {
  const result = [];
  
  for (let i = 0; i< a.length; i++) {
    if(i===0) {
      minHeap.add(a[i]);
    } else {
      if (a[i] <= median()) {
        maxHeap.add(a[i]);
      } else {
        minHeap.add(a[i]);
      }
    }
    fixChaos();
    let m = median();
    result.push(format(m));
    console.log(a[i]);
    maxHeap.print("Max");
    minHeap.print("Min");
  }
  return result;
}

function fixChaos(){
  //if sizes of heaps differ by 2, then it's a chaos, since median must be the middle element
  if( Math.abs(maxHeap.size() - minHeap.size()) > 1) {
      //check which one is the culprit and take action by kicking out the root from culprit into victim
      if(maxHeap.size() > minHeap.size()){
          minHeap.add(maxHeap.extract());
      }
      else{ maxHeap.add(minHeap.extract());}
  }
}

function median() {
  if( maxHeap.size() === minHeap.size()) {
    return (maxHeap.peek() + minHeap.peek())/2 ;
  }
  else if (maxHeap.size() > minHeap.size())
  { 
    return maxHeap.peek();
  }
  else { 
    return minHeap.peek();
  }
}

function format(num) {
  return (Math.round(parseFloat(num) * 10)/10).toFixed(1);
}



let result = runningMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);