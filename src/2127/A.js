module.exports = {
  isGood: (arr) => {
    const temp = arr.filter((item) => item !== -1);
    return temp.length === 0 || (new Set(temp).size === 1 && temp[0] !== 0)
      ? 'YES'
      : 'NO';
  },
};
