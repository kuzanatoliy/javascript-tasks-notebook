module.exports = {
  getCountOfOperations: (health, guns) => {
    const arr = guns.sort((a, b) => b - a);
    const sum = arr[0] + arr[1];
    let count = Math.floor(health / sum) * 2;
    const d = health % sum;
    if (d > 0) {
      count += d > arr[0] ? 2 : 1;
    }
    return count;
  },
};
