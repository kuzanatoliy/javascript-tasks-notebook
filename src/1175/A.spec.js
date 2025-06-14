const { getCountOfOperations } = require('./A');

describe('1175A. From Hero to Zero', () => {
  it.each`
    n    | num                     | k      | result
    ${1} | ${59n}                  | ${3n}  | ${8n}
    ${2} | ${1000000000000000000n} | ${10n} | ${19n}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfOperations(num, k)).toBe(result);
  });
});
