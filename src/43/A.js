module.exports = {
  getWinner: (goals) => {
    const obj = {};
    for (let i = 0; i < goals.length; i++) {
      obj[goals[i]] = (obj[goals[i]] || 0) + 1;
    }
    const keys = Object.keys(obj);
    return obj[keys[0]] >= (obj[keys[1]] || 0) ? keys[0] : keys[1];
  },
};
