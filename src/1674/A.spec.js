const { getPair } = require('./A');

describe('1674A. Number Transformation', () => {
  it.each`
    n    | x      | y      | result
    ${1} | ${3}   | ${75}  | ${[1, 25]}
    ${2} | ${100} | ${100} | ${[1, 1]}
    ${3} | ${42}  | ${13}  | ${[0, 0]}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getPair(x, y)).toStrictEqual(result);
  });
});
