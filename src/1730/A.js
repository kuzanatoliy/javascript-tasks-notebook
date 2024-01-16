module.exports = {
  getMinCost: (cost, planets) => {
    const temp = [];
    for (let i = 0; i < planets.length; i++) {
      temp[planets[i]] = (temp[planets[i]] || 0) + 1;
    }
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
      if (!temp[i]) {
        continue;
      }
      if (temp[i] && temp[i] < cost) {
        count += temp[i];
      } else {
        count += cost;
      }
    }
    return count;
  },
};
