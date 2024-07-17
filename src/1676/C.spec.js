const { getMinDif } = require('./C');

describe('1676C. Most Similar Words', () => {
  it.each`
    n    | boxes                                         | result
    ${1} | ${['best', 'cost']}                           | ${11}
    ${2} | ${['abb', 'zba', 'bef', 'cdu', 'ooo', 'zzz']} | ${8}
    ${3} | ${['aaabbbc', 'bbaezfe']}                     | ${35}
    ${4} | ${['ab', 'ab', 'ab']}                         | ${0}
    ${5} | ${['aaaaaaaa', 'zzzzzzzz']}                   | ${200}
    ${6} | ${['a', 'u', 'y']}                            | ${4}
  `('Base test: $n', ({ boxes, result }) => {
    expect(getMinDif(boxes)).toBe(result);
  });
});
