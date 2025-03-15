const { getLongestSeria } = require('./A');

describe('686A. Opponents', () => {
  it.each`
    n    | rounds                                      | result
    ${1} | ${['10', '00']}                             | ${2}
    ${2} | ${['0100']}                                 | ${1}
    ${3} | ${['1101', '1111', '0110', '1011', '1111']} | ${2}
  `('Base test: $n', ({ rounds, result }) => {
    expect(getLongestSeria(rounds)).toStrictEqual(result);
  });
});
