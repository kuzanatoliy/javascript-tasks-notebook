const { isItPossibleToReward } = require('./A');

describe('1186A. Vus the Cossack and a Contest', () => {
  it.each`
    n    | a    | b    | c     | result
    ${1} | ${5} | ${8} | ${6}  | ${'YES'}
    ${2} | ${3} | ${9} | ${3}  | ${'YES'}
    ${3} | ${8} | ${5} | ${20} | ${'NO'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(isItPossibleToReward(a, b, c)).toBe(result);
  });
});
