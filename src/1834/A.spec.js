const { getCountOfOperations } = require('./A');

describe('1834A. Unit Array', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[-1, -1, 1, -1]}    | ${1}
    ${2} | ${[-1, -1, -1, 1, 1]} | ${1}
    ${3} | ${[-1, 1, -1, 1]}     | ${0}
    ${4} | ${[-1, -1, -1]}       | ${3}
    ${5} | ${[1, 1, 1, 1, 1]}    | ${0}
    ${6} | ${[-1]}               | ${1}
    ${7} | ${[-1, -1]}           | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
