const check = (value, pref = '') => {
  const d1 = +`${pref.toString()}4`;
  const d2 = +`${pref.toString()}7`;
  return (
    value % d1 === 0 ||
    value % d2 === 0 ||
    (d2 < value && check(value, d2)) ||
    (d1 < value && check(value, d1))
  );
};

module.exports = {
  check,
};
