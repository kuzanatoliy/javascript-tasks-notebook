module.exports = {
  isItPossilbeToReorder: (arr) => {
    let c0 = 0;
    let c1 = 0;
    for (let j = 0; j < arr.length; j++) {
      c0 += arr[j] === 0;
      c1 += arr[j] === 1;
    }

    return c0 !== 0 && (c0 === 1 || c1 >= 1) ? 'YES' : 'NO';
  },
};
