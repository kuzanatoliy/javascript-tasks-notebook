module.exports = {
  getMaxLakeVolume: (grid) => {
    const n = grid.length;
    const m = grid[0].length;
    let maxVolume = 0;

    function traverse(i, j) {
      const stack = [[i, j]];
      let volume = 0;

      while (stack.length > 0) {
        const top = stack.pop();
        const [x, y] = top;
        if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] === 0) {
          continue;
        }
        volume += grid[x][y];
        grid[x][y] = 0;
        stack.push([x - 1, y]);
        stack.push([x + 1, y]);
        stack.push([x, y - 1]);
        stack.push([x, y + 1]);
      }

      return volume;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] > 0) {
          maxVolume = Math.max(maxVolume, traverse(i, j));
        }
      }
    }
    return maxVolume;
  },
};
