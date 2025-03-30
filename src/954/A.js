module.exports = {
  getLength: (road) => {
    let count = 0;
    for (let j = 1; j < road.length; j++) {
      if (road[j - 1] !== road[j]) {
        count++;
        j++;
      }
    }
    return road.length - count;
  },
};
