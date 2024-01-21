const { getMinNumberOfStrings } = require('./A');

describe('1189A. Keanu Reeves', () => {
  it.each`
    n    | string      | result
    ${1} | ${'1'}      | ${[1, '1']}
    ${2} | ${'10'}     | ${[2, '1 0']}
    ${3} | ${'100011'} | ${[2, '10001 1']}
  `('Base test: $n', ({ string, result }) => {
    expect(getMinNumberOfStrings(string)).toStrictEqual(result);
  });
});
