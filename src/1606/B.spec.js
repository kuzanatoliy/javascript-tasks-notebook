const { getDelay } = require('./B');

describe('1606B. Update Files', () => {
  it.each`
    n    | num   | k     | result
    ${1} | ${8n} | ${3n} | ${4n}
    ${2} | ${6n} | ${6n} | ${3n}
    ${3} | ${7n} | ${1n} | ${6n}
    ${4} | ${1n} | ${1n} | ${0n}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getDelay(num, k)).toBe(result);
  });
});
