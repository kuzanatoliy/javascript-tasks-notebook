module.exports = {
  getGroups: (arr) => {
    const s1 = [];
    const s2 = [];
    const s3 = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < 0) {
        s1.push(arr[j]);
      } else if (arr[j] > 0) {
        s2.push(arr[j]);
      } else {
        s3.push(arr[j]);
      }
    }
    if (s2.length === 0) {
      s2.push(s1.pop());
      s2.push(s1.pop());
    }
    if (s1.length % 2 === 0) {
      s3.push(s1.pop());
    }
    return [s1, s2, s3];
  },
};
