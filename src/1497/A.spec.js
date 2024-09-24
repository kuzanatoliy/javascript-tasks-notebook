const { transformArray } = require('./A');

describe('1497A. Meximization', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[4, 2, 0, 1, 3, 3, 7]} | ${[0, 1, 2, 3, 4, 7, 3]}
    ${2} | ${[2, 2, 8, 6, 9]}       | ${[2, 6, 8, 9, 2]}
    ${3} | ${[0]}                   | ${[0]}
  `('Base test: $n', ({ array, result }) => {
    expect(transformArray(array)).toStrictEqual(result);
  });
});
