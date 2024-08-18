module.exports = {
  isTheAllPassengersFollowedTheRecommendations: (array) => {
    const arr = new Array(array.length + 2).fill(0);
    arr[array[0]]++;
    for (let j = 1; j < array.length; j++) {
      const index = array[j];
      if (arr[index - 1] !== 0 || arr[index + 1] !== 0) {
        arr[index]++;
        continue;
      }
      return 'NO';
    }
    return 'YES';
  },
};
