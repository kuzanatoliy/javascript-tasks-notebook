module.exports = {
  isItPossibleToExecute: (map) => {
    const stack = [];
    let ind = -1;
    for (let j = 1; j < map.length; j++) {
      if (stack[ind] === map[j]) {
        ind--;
      } else {
        ind++;
        stack[ind] = map[j];
      }
    }
    return ind ? 'NO' : 'YES';
  },
};
