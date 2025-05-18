const { getMaxCount } = require('./B');

describe('1945B. Fireworks', () => {
  it.each`
    n    | a     | b     | m                       | result
    ${1} | ${6n} | ${7n} | ${4n}                   | ${2n}
    ${2} | ${3n} | ${4n} | ${10n}                  | ${7n}
    ${3} | ${7n} | ${8n} | ${56n}                  | ${17n}
    ${4} | ${5n} | ${6n} | ${78123459896n}         | ${28645268630n}
    ${5} | ${1n} | ${1n} | ${1n}                   | ${4n}
    ${6} | ${1n} | ${1n} | ${1000000000000000000n} | ${2000000000000000002n}
  `('Base test: $n', ({ a, b, m, result }) => {
    expect(getMaxCount(a, b, m)).toBe(result);
  });
});
