const { getCountOfOperations } = require('./A');

describe('1809A. Garland', () => {
  it.each`
    n    | map       | result
    ${1} | ${'9546'} | ${4}
    ${2} | ${'0000'} | ${-1}
    ${3} | ${'3313'} | ${6}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfOperations(map)).toBe(result);
  });
});
