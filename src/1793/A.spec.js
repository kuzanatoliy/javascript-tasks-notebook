const { getCost } = require('./A');

describe('1793A. Yet Another Promotion', () => {
  it.each`
    n    | a              | b             | num            | m     | result
    ${1} | ${5n}          | ${4n}         | ${3n}          | ${1n} | ${9n}
    ${2} | ${5n}          | ${4n}         | ${3n}          | ${2n} | ${10n}
    ${3} | ${3n}          | ${4n}         | ${3n}          | ${5n} | ${9n}
    ${4} | ${20n}         | ${15n}        | ${10n}         | ${2n} | ${135n}
    ${5} | ${1000000000n} | ${900000000n} | ${1000000000n} | ${8n} | ${888888888900000000n}
  `('Base test: $n', ({ a, b, num, m, result }) => {
    expect(getCost(a, b, num, m)).toBe(result);
  });
});
