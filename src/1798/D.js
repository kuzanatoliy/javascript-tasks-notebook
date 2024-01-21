module.exports = {
  isItPossibleToRearrangeElements: (elements) => {
    if (elements.length === 1) {
      return ['No'];
    }
    const arr = elements.sort((a, b) => a - b);
    if (arr[elements.length - 1] === 0) {
      return ['No'];
    }
    let j1 = 0;
    let j2 = arr.length - 1;
    let sum = 0;
    const res = [];
    while (j1 !== j2) {
      if (sum >= 0) {
        res.push(arr[j1]);
        j1++;
      } else {
        res.push(arr[j2]);
        j2--;
      }
      sum += res[res.length - 1];
    }
    res.push(arr[j1]);
    return ['Yes', res];
  },
};
