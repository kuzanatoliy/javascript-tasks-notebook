module.exports = {
  getMinCost: (friends, costs) => {
    friends.sort((a, b) => b - a);
    let sum = 0;
    let next = 0;
    for (let j = 0; j < friends.length; j++) {
      if (costs[friends[j] - 1] > costs[next]) {
        sum += costs[next];
        next++;
      } else {
        sum += costs[friends[j] - 1];
      }
    }
    return sum;
  },
};
