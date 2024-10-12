const { transformArray } = require('./C');

describe('1628C. Meximum Array', () => {
  it.each`
    n    | array                             | result
    ${1} | ${[1, 0, 2, 0, 3]}                | ${[4]}
    ${2} | ${[2, 2, 3, 4, 0, 1, 2, 0]}       | ${[5, 1]}
    ${3} | ${[1]}                            | ${[0]}
    ${4} | ${[0, 1, 2, 3, 4]}                | ${[5]}
    ${5} | ${[0, 1, 1, 0]}                   | ${[2, 2]}
    ${6} | ${[0, 0, 2, 1, 1, 1, 0, 0, 1, 1]} | ${[3, 2, 2, 0]}
  `('Base test: $n', ({ array, result }) => {
    expect(transformArray(array)).toStrictEqual(result);
  });
});
