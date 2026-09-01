const { isSuperCard } = require('./A');

describe('2254A. The Best Card', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${'YES'}
    ${2} | ${3} | ${'NO'}
    ${3} | ${4} | ${'YES'}
    ${4} | ${5} | ${'NO'}
    ${5} | ${8} | ${'NO'}
  `('Base test: $n', ({ num, result }) => {
    expect(isSuperCard(num)).toBe(result);
  });
});
