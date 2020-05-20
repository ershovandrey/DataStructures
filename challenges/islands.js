//Find islands excercise.
// https://leetcode.com/problems/number-of-closed-islands/
// https://leetcode.com/problems/number-of-islands/
// https://www.youtube.com/watch?v=o8S2bO3pmO4

function countIslandsDFS(grid, rows, cols) {
  let count = 0;
  const visited = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[i] === undefined) {
        visited[i] = [];
      }
      if (grid[i][j] === 1 && visited[i][j] === undefined) {
        dfs(grid, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

function dfs(grid, row, col, visited) {
  const rows = [-1, 0, 0, 1];
  const cols = [0, -1, 1, 0];
  if (visited[row] === undefined) {
    visited[row] = [];
  }
  visited[row][col] = 1;
  for (k = 0; k < 8; k++) {
    if (possibleCell(grid, row + rows[k], col + cols[k], visited)) {
      dfs(grid, row + rows[k], col + cols[k], visited);
    }
  }
}

function countIslandsDFSStack(grid, rows, cols) {
  let count = 0;
  const visited = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[i] === undefined) {
        visited[i] = [];
      }
      if (grid[i][j] === 1 && visited[i][j] === undefined) {
        dfsStack(grid, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

function dfsStack(grid, row, col, visited) {
  const rows = [-1, 0, 0, 1];
  const cols = [0, -1, 1, 0];
  const stack = [[row, col]];
  visited[row][col] = 1;
  while (stack.length) {
    const cell = stack.pop();
    for (k = 0; k < 8; k++) {
      const i = cell[0] + rows[k];
      const j = cell[1] + cols[k];
      if (possibleCell(grid, i, j, visited)) {
        visited[i][j] = 1;
        stack.push([i, j]);
      }
    }
  }
}

function countIslandsBFS(grid, rows, cols) {
  let count = 0;
  const visited = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[i] === undefined) {
        visited[i] = [];
      }
      if (grid[i][j] === 1 && visited[i][j] === undefined) {
        bfs(grid, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

function bfs(grid, row, col, visited) {
  const rows = [-1, 0, 0, 1];
  const cols = [0, -1, 1, 0];
  const queue = [[row, col]];
  visited[row][col] = 1;
  while (queue.length) {
    const cell = queue.shift();
    for (k = 0; k < 8; k++) {
      const i = cell[0] + rows[k];
      const j = cell[1] + cols[k];
      if (possibleCell(grid, i, j, visited)) {
        visited[i][j] = 1;
        queue.push([i, j]);
      }
    }
  }
}

function possibleCell(grid, row, col, visited) {
  if (visited[row] === undefined) {
    visited[row] = [];
  }
  return (row >= 0 && row < grid.length 
    && col >= 0 && col < grid[0].length
    && grid[row][col] === 1
    && visited[row][col] === undefined);
}

const matrix = [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 1, 1, 1]
];

console.log(countIslandsDFS(matrix, 6, 4));
console.log(countIslandsDFSStack(matrix, 6, 4));
console.log(countIslandsBFS(matrix, 6, 4));