const { isItPossibleToReorderArray } = require('./A');

describe("1890A. Doremy's Paint 3", () => {
  it.each`
    n    | array                               | result
    ${1} | ${[8, 9]}                           | ${'YES'}
    ${2} | ${[1, 1, 2]}                        | ${'YES'}
    ${3} | ${[1, 1, 4, 5]}                     | ${'NO'}
    ${4} | ${[2, 3, 3, 3, 3]}                  | ${'NO'}
    ${5} | ${[100000, 100000, 100000, 100000]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToReorderArray(array)).toBe(result);
  });
});
