module.exports = {
  isItPossibleToWin: (A, B, arrA, arrB) => {
    const monster = new Array(arrA.length);
    for (let i = 0; i < arrA.length; i++) {
      monster[i] = [arrA[i], arrB[i]];
    }

    monster.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < arrA.length; i++) {
      if (B <= 0) {
        return 'NO';
      }
      const count = Math.ceil(monster[i][1] / A);
      const count2 = Math.ceil(B / monster[i][0]);
      if (count2 < count) {
        return 'NO';
      }
      B -= count * monster[i][0];
    }
    return 'YES';
  },
};
