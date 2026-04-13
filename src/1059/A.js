module.exports = {
  getCountOfBreaks: (l, d, clients) => {
    let prev = 0;
    let res = 0;
    for (let j = 0; j < clients.length; j++) {
      res += Math.floor((clients[j][0] - prev) / d);
      prev = clients[j][0] + clients[j][1];
    }
    res += Math.floor((l - prev) / d);
    return res;
  },
};
