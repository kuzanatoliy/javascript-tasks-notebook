const { getMinCountOfOperations } = require('./A');

describe('2020A. Find Minimum Operations', () => {
  it.each`
    n    | num     | k     | result
    ${1} | ${5}    | ${2}  | ${2}
    ${2} | ${3}    | ${5}  | ${3}
    ${3} | ${16}   | ${4}  | ${1}
    ${4} | ${100}  | ${3}  | ${4}
    ${5} | ${6492} | ${10} | ${21}
    ${6} | ${10}   | ${1}  | ${10}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMinCountOfOperations(num, k)).toBe(result);
  });
});
