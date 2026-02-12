module.exports = {
  getCardMap: (count, queue) => {
    const map = new Array(count).fill('+');
    if (count === queue.length) {
      map.fill('-');
      return map.join('');
    }
    let j = 0;
    let t = 0;
    let b = count - 1;
    while (j < queue.length && queue[j] !== '2') {
      if (queue[j] === '0') {
        map[t] = '-';
        t++;
      } else {
        map[b] = '-';
        b--;
      }
      j++;
    }
    let tv = t;
    let bv = b;
    while (j < queue.length) {
      if (queue[j] === '2') {
        map[tv] = '?';
        map[bv] = '?';
        tv++;
        bv--;
      }
      if (queue[j] === '0') {
        map[t] = '-';
        map[tv] = '?';
        t++;
        tv++;
      }
      if (queue[j] === '1') {
        map[b] = '-';
        map[bv] = '?';
        b--;
        bv--;
      }
      j++;
    }
    return map.join('');
  },
};
