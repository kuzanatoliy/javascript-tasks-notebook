/* eslint-disable max-depth */
function canBePushedFromLeft(grid, row, col) {
  for (let j = 0; j < col; j++) {
    if (grid[row][j] === 0) {
      return false;
    }
  }
  return true;
}

function canBePushedFromTop(grid, row, col) {
  for (let i = 0; i < row; i++) {
    if (grid[i][col] === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isValidConfiguration: (grid) => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          const canPushFromLeft = canBePushedFromLeft(grid, i, j);
          const canPushFromTop = canBePushedFromTop(grid, i, j);

          if (!canPushFromLeft && !canPushFromTop) {
            return 'NO';
          }
        }
      }
    }
    return 'YES';
  },
};
