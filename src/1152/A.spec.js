const { getCountOfOpenedBoxes } = require('./A');

describe('1154A. Neko Finds Grapes', () => {
  it.each`
    n    | boxes               | keys                | result
    ${1} | ${[9, 14, 6, 2, 1]} | ${[8, 4, 7, 20]}    | ${3}
    ${2} | ${[2, 4, 6, 8, 10]} | ${[5]}              | ${1}
    ${3} | ${[10]}             | ${[20, 30, 40, 50]} | ${0}
  `('Base test: $n', ({ boxes, keys, result }) => {
    expect(getCountOfOpenedBoxes(boxes, keys)).toStrictEqual(result);
  });
});
