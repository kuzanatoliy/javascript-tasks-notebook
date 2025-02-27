const { getLighters } = require('./B');

describe('1734B. Bright, Nice, Brilliant', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[[1]]}
    ${2} | ${2} | ${[[1], [1, 1]]}
    ${3} | ${3} | ${[[1], [1, 1], [1, 0, 1]]}
  `('Base test: $n', ({ num, result }) => {
    expect(getLighters(num)).toStrictEqual(result);
  });
});
