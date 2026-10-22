module.exports = {
  isItPossibleToConstruct: (nodes) => {
    const temp = new Array(nodes.length + 2).fill(0);
    for (let j = 0; j < nodes.length; j++) {
      temp[nodes[j][0]]++;
      temp[nodes[j][1]]++;
    }
    let count = 0;
    for (let jj = 1; jj < temp.length; jj++) {
      count += temp[jj] === 1;
    }
    return Math.ceil(count / 2);
  },
};
