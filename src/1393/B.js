module.exports = {
  isItPossibleToOrder: (store, operations) => {
    const cnt = new Map();

    let fours = 0;
    let twos = 0;
    for (const x of store) {
      cnt.set(x, cnt.has(x) ? cnt.get(x) + 1 : 1);
      twos += cnt.get(x) % 4 === 2;

      fours += cnt.get(x) % 4 === 0;
      twos -= cnt.get(x) % 4 === 0;
    }

    const res = [];
    let q = 0;
    while (q < operations.length) {
      let x = Number(operations[q].split(' ').join(''));
      if (x > 0) {
        cnt.set(x, cnt.has(x) ? cnt.get(x) + 1 : 1);
        twos += cnt.get(x) % 4 === 2;

        fours += cnt.get(x) % 4 === 0;
        twos -= cnt.get(x) % 4 === 0;
      } else {
        x = -x;
        cnt.set(x, cnt.get(x) - 1);
        twos -= cnt.get(x) % 4 === 1;

        fours -= cnt.get(x) % 4 === 3;
        twos += cnt.get(x) % 4 === 3;
      }

      res.push(fours >= 1 && (fours >= 2 || twos >= 2) ? 'YES' : 'NO');
      q++;
    }

    return res;
  },
};
