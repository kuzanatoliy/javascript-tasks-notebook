const powers = 'ABCDEFG';

module.exports = {
  getCountOfTasks: (tasks, rounds) => {
    const map = {};
    for (let j = 0; j < tasks.length; j++) {
      map[tasks[j]] = (map[tasks[j]] || 0) + 1;
    }
    let count = 0;
    for (let j = 0; j < powers.length; j++) {
      const temp = map[powers[j]] || 0;
      if (temp < rounds) {
        count += rounds - temp;
      }
    }
    return count;
  },
};
