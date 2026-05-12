module.exports = {
  isUnimodal: (arr) => {
    let i = 1;
    let [prev, cur] = arr;

    while (prev < cur) {
      i++;
      prev = cur;
      cur = arr[i];
    }

    while (prev === cur) {
      i++;
      prev = cur;
      cur = arr[i];
    }

    while (prev > cur) {
      i++;
      prev = cur;
      cur = arr[i];
    }

    return i === arr.length ? 'YES' : 'NO';
  },
};
