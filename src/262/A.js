module.exports = {
  getCountOfNumbers: (k, arr) =>
    arr
      .map((item) => {
        const str = item.toString();
        let c = 0;
        for (let j = 0; j < str.length; j++) {
          if (str[j] === '4' || str[j] === '7') {
            c++;
          }
        }
        return c;
      })
      .filter((item) => item <= k).length,
};
