const { isItPossibleToWin } = require('./B');

describe('1245B. Restricted RPS', () => {
  it.each`
    n    | R    | P    | S    | string   | result
    ${1} | ${1} | ${1} | ${1} | ${'RPS'} | ${['YES', 'PSR']}
    ${2} | ${3} | ${0} | ${0} | ${'RPS'} | ${['NO']}
  `('Base test: $n', ({ R, P, S, string, result }) => {
    expect(isItPossibleToWin(R, P, S, string)).toStrictEqual(result);
  });
});
