// Check if brackets are balanced
// https://www.hackerrank.com/challenges/ctci-balanced-brackets/problem
function isBalanced(s) {
  const stack = [];
  const opening = ['(', '[', '{'];
  if (s.length === 0) {
    return 'NO';
  }
  for (let i=0; i<s.length; i++) {
    if (opening.includes(s[i])) {
      stack.push(s[i]);
    }
    else {
      let bracket = stack.pop();
      if (bracket === undefined
       || (bracket === '(' && s[i] !== ')')
       || (bracket === '[' && s[i] !== ']')
       || (bracket === '{' && s[i] !== '}')
      ) {
        return 'NO';
      }
    }
  }
  return (stack.length > 0) ? 'NO' : 'YES';
}
  
console.log(isBalanced('{[()]}'));