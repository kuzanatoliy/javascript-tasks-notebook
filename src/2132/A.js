module.exports = {
  getString: (strA, strB, map) => {
    const tempV = [];
    const tempD = [];
    for (let j = 0; j < map.length; j++) {
      if (map[j] === 'V') {
        tempV.push(strB[j]);
      } else {
        tempD.push(strB[j]);
      }
    }
    return `${tempV.reverse().join('')}${strA}${tempD.join('')}`;
  },
};
