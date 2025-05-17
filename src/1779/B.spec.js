const { isItPosibleToConstructArray } = require('./B');

describe('1779A. Hall of Fame', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${['YES', [-1, 1]]}
    ${2} | ${3} | ${['NO']}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPosibleToConstructArray(num)).toStrictEqual(result);
  });
});
