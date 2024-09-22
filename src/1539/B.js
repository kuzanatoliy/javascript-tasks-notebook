module.exports = {
  getStrLengths: (str, queries) => {
    let sum = 0;
    const arr = str.split('').map((item) => {
      sum += item.charCodeAt() - 96;
      return sum;
    });
    const lengths = [];
    for (let j = 0; j < queries.length; j++) {
      lengths.push(arr[queries[j][1] - 1] - (arr[queries[j][0] - 2] || 0));
    }
    return lengths;
  },
};
