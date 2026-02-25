module.exports = {
  isHash: (str, pass) => {
    const d = pass.length - str.length;
    const ans = str.split('').sort().join('');
    const p = pass.split('');
    for (let j = 0; j <= d; j++) {
      if ([...p].splice(j, str.length).sort().join('') === ans) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
