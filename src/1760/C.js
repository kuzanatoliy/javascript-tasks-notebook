module.exports = {
  getDifs: (array) => {
    let max = 0;
    let submax = 0;
    if (array[0] > array[1]) {
      max = 0;
      submax = 1;
    } else {
      max = 1;
      submax = 0;
    }
    for (let j = 2; j < array.length; j++) {
      let temp = j;
      if (array[temp] > array[max]) {
        temp = max;
        max = j;
      }
      if (array[temp] > array[submax]) {
        submax = temp;
      }
    }
    const res = [];
    for (let j = 0; j < array.length; j++) {
      res.push(array[j] - array[max]);
    }
    res[max] = array[max] - array[submax];
    return res;
  },
};
