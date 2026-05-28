module.exports = {
  isPair: (camels) => {
    const temp = camels.map((item) => [item[0], item[0] + item[1]]);
    const set = new Set(temp.map((item) => item.toString()));
    for (let j = 0; j < temp.length; j++) {
      if (set.has(temp[j].reverse().toString())) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
