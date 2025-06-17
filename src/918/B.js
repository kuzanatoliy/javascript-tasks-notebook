module.exports = {
  transformData: (hosts, stations) => {
    const map = {};
    for (let j = 0; j < hosts.length; j++) {
      const temp = hosts[j].split(' ');
      // eslint-disable-next-line prefer-destructuring
      map[temp[1]] = temp[0];
    }
    const res = [];
    for (let jj = 0; jj < stations.length; jj++) {
      const ans = stations[jj].slice(1, stations[jj].length - 1).split(' ');
      res.push(`${stations[jj]} #${map[ans[1]]}`);
    }
    return res;
  },
};
