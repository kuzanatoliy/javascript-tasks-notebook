module.exports = {
  getCountOfSovedTasks: (string) => {
    const map = {};
    for (let j = 0; j < string.length; j++) {
      map[string[j]] = (map[string[j]] || 0) + 1;
    }
    let count = 0;
    Object.keys(map).forEach((key) => {
      if (map[key] >= key.charCodeAt() - 64) {
        count++;
      }
    });
    return count;
  },
};
