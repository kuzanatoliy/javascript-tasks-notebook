const { checkEvenArray } = require('./B');

describe('1367B. Even Array', () => {
  it.each`
    n    | array                     | result
    ${1} | ${[3, 2, 7, 6]}           | ${2}
    ${2} | ${[3, 2, 6]}              | ${1}
    ${3} | ${[7]}                    | ${-1}
    ${4} | ${[4, 9, 2, 1, 18, 3, 0]} | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(checkEvenArray(array)).toBe(result);
  });
});
