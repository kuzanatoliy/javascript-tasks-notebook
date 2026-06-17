module.exports = {
  transformString: (str) => {
    const arr = str.split('');
    const r = [];
    let idx = 0;

    for (let i = 0; i < arr.length; i++) {
      const v = arr[i];

      arr[i] = {
        bracket: arr[i],
        cnt: idx,
      };

      idx = v === '(' ? idx + 1 : idx - 1;
    }

    arr.sort((a, b) => a.cnt - b.cnt);

    for (let i = 0; i < arr.length; i++) {
      const stack = [];

      while (i + 1 < arr.length && arr[i].cnt === arr[i + 1].cnt) {
        stack.push(arr[i].bracket);
        i++;
      }

      stack.push(arr[i].bracket);

      while (stack.length) {
        r.push(stack.pop());
      }
    }

    return r.join('');
  },
};
