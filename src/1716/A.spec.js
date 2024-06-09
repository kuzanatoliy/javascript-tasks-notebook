const { getCountOfOperations } = require('./A');

describe('1714A. 2-3 Moves', () => {
  it.each`
    n    | origin       | result
    ${1} | ${1}         | ${2}
    ${2} | ${3}         | ${1}
    ${3} | ${4}         | ${2}
    ${4} | ${12}        | ${4}
    ${5} | ${169102654} | ${56367552}
  `('Base test: $n', ({ origin, result }) => {
    expect(getCountOfOperations(origin)).toBe(result);
  });
});
