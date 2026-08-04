const intersectionWith = (...props) => {
  const comporator = props.pop();
  let [res] = props;
  for (let i = 1; i < props.length; i++) {
    res = res.filter((item) => props[i].some((pr) => comporator(item, pr)));
  }
  return res;
};

module.exports = {
  intersectionWith,
};
