const { getInteger } = require('./C');

describe('1362C. Johnny and Another Rating Drop', () => {
  it.each`
    n    | array             | result
    ${1} | ${5n}             | ${8n}
    ${2} | ${7n}             | ${11n}
    ${3} | ${11n}            | ${19n}
    ${4} | ${1n}             | ${1n}
    ${5} | ${2000000000000n} | ${3999999999987n}
  `('Base test: $n', ({ array, result }) => {
    expect(getInteger(array)).toBe(result);
  });
});
