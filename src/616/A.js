function trim(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '0') {
      return s.substr(i);
    }
  }
  return '0';
}

module.exports = {
  getEquality: (snum1, snum2) => {
    const s1 = trim(snum1);
    const s2 = trim(snum2);
    if (s1.length === s2.length) {
      for (let i = 0; i < s1.length; i++) {
        const v = s1.codePointAt(i) - s2.codePointAt(i);
        if (v === 0) {
          continue;
        } else {
          return v > 0 ? '>' : '<';
        }
      }
      return '=';
    } else {
      return s1.length > s2.length ? '>' : '<';
    }
  },
};
