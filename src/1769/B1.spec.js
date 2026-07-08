const { getEquivalentPositions } = require('./B1');

describe('1769B1. Копирование файлов I', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${[6]}                           | ${[0, 16, 33, 50, 66, 83, 100]}
    ${2} | ${[100, 500]}                    | ${[0, 95, 96, 97, 98, 99, 100]}
    ${3} | ${[1000, 2, 2, 998]}             | ${[0, 50, 99, 100]}
    ${4} | ${[170, 130, 400, 256, 30, 100]} | ${[0, 17, 43, 44, 84, 90, 99, 100]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getEquivalentPositions(arr)).toStrictEqual(result);
  });
});
