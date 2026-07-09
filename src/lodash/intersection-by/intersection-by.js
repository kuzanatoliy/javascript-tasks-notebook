const intersectionBy = (...props) => {
  const lp = props.pop();
  const tr = typeof lp === 'function' ? lp : (val) => val[lp];
  let [res] = props;
  for (let i = 1; i < props.length; i++) {
    const set = new Set(props[i].map(tr));
    const temp = [];
    for (let j = 0; j < res.length; j++) {
      const d = tr(res[j]);
      if (set.has(d)) {
        temp.push(res[j]);
      }
    }
    res = temp;
  }
  return res;
};

module.exports = {
  intersectionBy,
};
