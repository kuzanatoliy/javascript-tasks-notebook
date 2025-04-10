const { isNotGreater } = require('./A');

describe('1054A. Elevator or Stairs?', () => {
  it.each`
    n    | x    | y    | z    | t1   | t2   | t3   | result
    ${1} | ${5} | ${1} | ${4} | ${4} | ${2} | ${1} | ${'YES'}
    ${2} | ${1} | ${6} | ${6} | ${2} | ${1} | ${1} | ${'NO'}
    ${3} | ${4} | ${1} | ${7} | ${4} | ${1} | ${2} | ${'YES'}
  `('Base test: $n', ({ x, y, z, t1, t2, t3, result }) => {
    expect(isNotGreater(x, y, z, t1, t2, t3)).toStrictEqual(result);
  });
});
