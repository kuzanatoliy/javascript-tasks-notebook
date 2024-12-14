const { getOriginalSizes } = require('./B');

describe('2037B. Intercepted Inputs', () => {
  it.each`
    n    | array                                  | result
    ${1} | ${[1, 1, 2]}                           | ${[1, 1]}
    ${2} | ${[3, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11]} | ${[3, 3]}
    ${3} | ${[8, 4, 8, 3, 8, 2, 8, 1]}            | ${[2, 3]}
    ${4} | ${[2, 1, 4, 5, 3, 3]}                  | ${[1, 4]}
    ${5} | ${[1, 2, 6, 3, 8, 5, 5, 3]}            | ${[1, 6]}
  `('Base test: $n', ({ array, result }) => {
    expect(getOriginalSizes(array)).toStrictEqual(result);
  });
});
