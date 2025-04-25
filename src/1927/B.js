module.exports = {
  restoreString: (arr) => {
    const ques = [
      [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ],
    ];
    let str = '';
    for (let j = 0; j < arr.length; j++) {
      const next = ques[arr[j]].pop();
      if (!ques[arr[j] + 1]) {
        ques.push([next]);
      } else {
        ques[arr[j] + 1].push(next);
      }
      str += next;
    }
    return str;
  },
};
