const { getMiddleOfContest } = require('./A');

describe('1133A. Middle of the Contest', () => {
  it.each`
    n    | t1         | t2         | result
    ${1} | ${'10:00'} | ${'11:00'} | ${'10:30'}
    ${2} | ${'11:10'} | ${'11:12'} | ${'11:11'}
    ${3} | ${'01:02'} | ${'03:02'} | ${'02:02'}
  `('Base test: $n', ({ t1, t2, result }) => {
    expect(getMiddleOfContest(t1, t2)).toBe(result);
  });
});
