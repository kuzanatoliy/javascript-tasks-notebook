module.exports = {
  reorderArray: (arr) => {
    const div2 = [];
    const div3 = [];
    const non = [];
    const div6 = [];

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0 && arr[j] % 3 === 0) {
        div6.push(arr[j]);
      } else if (arr[j] % 2 === 0) {
        div2.push(arr[j]);
      } else if (arr[j] % 3 === 0) {
        div3.push(arr[j]);
      } else {
        non.push(arr[j]);
      }
    }

    return [...div2, ...non, ...div3, ...div6];
  },
};
