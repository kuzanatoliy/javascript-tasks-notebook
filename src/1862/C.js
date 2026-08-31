module.exports = {
  isSymetrical: (arr) => {
    if (arr.length !== arr[0]) {
      return 'NO';
    }

    for (let i = 1; i < arr.length; i++) {
      const space = arr.length - arr[i];
      if (arr[arr.length - 1 - space] < i + 1) {
        return 'NO';
      }
    }

    return 'YES';
  },
};
