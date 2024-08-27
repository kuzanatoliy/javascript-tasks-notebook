const { getUniqueElems } = require('./A');

describe('996A. Remove Duplicates', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 5, 5, 1, 6, 1]} | ${[5, 6, 1]}
    ${2} | ${[2, 4, 2, 4, 4]}    | ${[2, 4]}
    ${2} | ${[6, 6, 6, 6, 6]}    | ${[6]}
  `('Base test: $n', ({ array, result }) => {
    expect(getUniqueElems(array)).toStrictEqual(result);
  });
});
