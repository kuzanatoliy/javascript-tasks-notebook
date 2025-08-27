const { getCountOfOperations } = require('./A');

describe('465A. inc ARG', () => {
  it.each`
    n    | map       | result
    ${1} | ${'1100'} | ${3}
    ${2} | ${'1111'} | ${4}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfOperations(map)).toBe(result);
  });
});
