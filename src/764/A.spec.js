const { getCountOfNums } = require('./A');

describe('764A. Taymyr is calling you', () => {
  it.each`
    n    | num  | m    | k     | result
    ${1} | ${1} | ${1} | ${10} | ${10}
    ${2} | ${1} | ${2} | ${5}  | ${2}
    ${3} | ${2} | ${3} | ${9}  | ${1}
  `('Base test: $n', ({ num, m, k, result }) => {
    expect(getCountOfNums(num, m, k)).toBe(result);
  });
});
