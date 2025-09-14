const { getDirection } = require('./A');

describe('834A. The Useless Toy', () => {
  it.each`
    n    | s1     | s2     | num  | result
    ${1} | ${'^'} | ${'>'} | ${1} | ${'cw'}
    ${2} | ${'<'} | ${'^'} | ${3} | ${'ccw'}
    ${3} | ${'^'} | ${'v'} | ${6} | ${'undefined'}
  `('Base test: $n', ({ s1, s2, num, result }) => {
    expect(getDirection(s1, s2, num)).toBe(result);
  });
});
