const join = (arr, separator) => {
  let str = arr[0].toString();
  for (let j = 1; j < arr.length; j++) {
    str += separator + arr[j].toString();
  }
  return str;
};

module.exports = {
  join,
};
