module.exports = {
  getResultArray: (array, operations, queries) => {
    const deployOp = new Array(operations.length + 1).fill(0);
    for (let j = 0; j < queries.length; j++) {
      deployOp[queries[j][0] - 1] += 1;
      deployOp[queries[j][1]] += -1;
    }

    for (let i = 1; i < deployOp.length; i++) {
      deployOp[i] += deployOp[i - 1];
    }
    const arrValues = new Array(array.length + 1).fill(0);
    for (let j = 0; j < operations.length; j++) {
      arrValues[operations[j][0] - 1] += operations[j][2] * deployOp[j];
      arrValues[operations[j][1]] += -operations[j][2] * deployOp[j];
    }

    for (let i = 1; i < arrValues.length; i++) {
      arrValues[i] += arrValues[i - 1];
    }
    for (let j = 0; j < array.length; j++) {
      array[j] = parseInt(array[j]) + arrValues[j];
    }
    return array;
  },
};
