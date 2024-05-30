const c = new Set();
for (let i = 1; i <= 1e4; i++) {
  c.add(i * i * i);
}

module.exports = {
  isRepresentable: (number) => {
    const m = Math.ceil(Math.cbrt(number));
    let f = false;
    for (let i = 1; i <= m && !f; i++) {
      if (c.has(number - i * i * i)) {
        f = true;
      }
    }
    return f ? 'YES' : 'NO';
  },
};
