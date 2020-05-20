// Logs sort excercise.
// https://leetcode.com/problems/reorder-data-in-log-files/
function getSortedLogs(logs) {
  logs.sort(function (a, b) {
    const rec1 = a.split(" ", 2);
    const rec2 = b.split(" ", 2);
    const isDigit1 = Boolean(parseInt(rec1[1]) + 1);
    const isDigit2 = Boolean(parseInt(rec2[1]) + 1);
    if (!isDigit1 && !isDigit2) {
      // If both letter-strings are equal - compare identifiers.
      if (rec1[1] === rec2[1]) {
        if (rec1[0] === rec2[0]) {
          return 0;
        }
        else if (rec1[0] < rec2[0]) {
          return -1;
        }
        else {
          return 1;
        }
      }
      else if (rec1[1] < rec2[1]) {
        // First letter-string is less than second.
        return -1;
      }
      else {
        // First letter-string is greater than second.
        return 1;
      }
    }
    else if (isDigit1 && isDigit2) {
      // Both are digit-strings - stay at original position.
      return 0;
    }
    else if (isDigit1 && !isDigit2) {
      // First digit-string is greater than second Letter-string.
      return 1;
    }
    else {
      // First Letter-string is less than second digit-string.
      return -1;
    }
  });
  return logs;
}

const logs = [
  "dig1 0 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero"
];

console.log(getSortedLogs(logs));