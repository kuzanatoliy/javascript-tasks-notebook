module.exports = {
  getCountOfProtectedItems: (map, k) => {
    k--;
    const temp = map.split('1');
    let count = temp.length > 1 ? 1 : 0;
    for (let j = 1; j < temp.length - 1; j++) {
      count += temp[j].length >= k;
    }
    return count;
  },
};
