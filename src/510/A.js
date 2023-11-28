const LINE_1 = '##################################################';
const LINE_2 = '#..................................................#';

module.exports = {
  printSnake: (rows, columns) => {
    const result = [];
    const l1 = LINE_1.slice(0, columns);
    const l2 = LINE_2.slice(0, columns);
    const l3 = LINE_2.slice(LINE_2.length - columns, LINE_2.length);
    for (let i = 0; i < rows; i++) {
      if (i % 2 === 0) {
        result.push(l1);
        continue;
      }

      if (i % 4 === 1) {
        result.push(l3);
        continue;
      }

      result.push(l2);
    }
    return result;
  },
};
