const { getCountOfOperations } = require('./A');

describe('1488A. From Zero To Y', () => {
  it.each`
    n    | x     | y       | result
    ${1} | ${2}  | ${7}    | ${4}
    ${2} | ${3}  | ${42}   | ${5}
    ${3} | ${25} | ${1337} | ${20}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCountOfOperations(x, y)).toBe(result);
  });
});
