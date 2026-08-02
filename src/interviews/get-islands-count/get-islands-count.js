/* eslint-disable max-depth */
module.exports = {
  getIslandsCount: (matrix) => {
    let count = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[0].length; jj++) {
        if (matrix[j][jj]) {
          const queue = [[j, jj]];
          count++;
          while (queue.length) {
            const next = queue.shift();
            if (matrix[next[0]][next[1]]) {
              matrix[next[0]][next[1]] = 0;
              if (matrix[next[0] - 1]) {
                queue.push([next[0] - 1, next[1] - 1]);
                queue.push([next[0] - 1, next[1]]);
                queue.push([next[0] - 1, next[1] + 1]);
              }
              queue.push([next[0], next[1] - 1]);
              queue.push([next[0], next[1] + 1]);
              if (matrix[next[0] + 1]) {
                queue.push([next[0] + 1, next[1] - 1]);
                queue.push([next[0] + 1, next[1]]);
                queue.push([next[0] + 1, next[1] + 1]);
              }
            }
          }
        }
      }
    }
    return count;
  },
};
