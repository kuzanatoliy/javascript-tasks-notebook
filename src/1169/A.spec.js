const { isItPossibleToMeet } = require('./A');

describe('1169A. Circle Metro', () => {
  it.each`
    n    | num   | a     | x     | b     | y     | result
    ${1} | ${5}  | ${1}  | ${4}  | ${3}  | ${2}  | ${'YES'}
    ${2} | ${10} | ${2}  | ${1}  | ${9}  | ${10} | ${'NO'}
    ${3} | ${47} | ${15} | ${45} | ${28} | ${38} | ${'YES'}
  `('Base test: $n', ({ num, a, x, b, y, result }) => {
    expect(isItPossibleToMeet(num, a, x, b, y)).toBe(result);
  });
});
