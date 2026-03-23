const { getConstruction } = require('./B');

describe('2147B. Multiple Construction', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[2, 1, 2, 1]}
    ${2} | ${3} | ${[3, 2, 1, 3, 1, 2]}
    ${3} | ${1} | ${[1, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getConstruction(num)).toStrictEqual(result);
  });
});
