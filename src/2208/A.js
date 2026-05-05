module.exports = {
  isItPossibleToReorder: (matrix) => {
    const temp = new Array(matrix.length * matrix[0].length).fill(0);
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        temp[matrix[j][jj] - 1]++;
      }
    }
    const d = temp.length - matrix.length;
    for (let jjj = 0; jjj < temp.length; jjj++) {
      if (temp[jjj] > d) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
