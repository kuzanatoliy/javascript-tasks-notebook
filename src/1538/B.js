module.exports = {
  getCountOfFriends: (array) => {
    const sum = array.reduce((s, val) => s + val, 0);
    if (sum % array.length > 0) {
      return -1;
    }
    const d = sum / array.length;
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > d) {
        count++;
      }
    }
    return count;
  },
};
