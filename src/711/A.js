module.exports = {
  isItPossibleToFindPlace: (config) => {
    const res = [];
    let is = 'NO';
    for (let j = 0; j < config.length; j++) {
      const places = config[j].split('|');
      if (places[0] === 'OO') {
        res.push(`++|${places[1]}`);
        is = 'YES';
        break;
      }
      if (places[1] === 'OO') {
        res.push(`${places[0]}|++`);
        is = 'YES';
        break;
      }
      res.push(config[j]);
    }
    for (let j = res.length; j < config.length; j++) {
      res.push(config[j]);
    }
    return is === 'YES' ? [is, res] : [is];
  },
};
