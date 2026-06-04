const initial = (arr) => {
  const res = [...arr];
  res.length--;
  return res;
};

module.exports = {
  initial,
};
