const { getCountOfRemovedElems } = require('./D');

describe('1850D. Balanced Round', () => {
  it.each`
    n    | array                            | k    | result
    ${1} | ${[1, 2, 4, 5, 6]}               | ${1} | ${2}
    ${2} | ${[10]}                          | ${2} | ${0}
    ${3} | ${[17, 3, 1, 20, 12, 5, 17, 12]} | ${3} | ${5}
    ${4} | ${[2, 4, 6, 8]}                  | ${2} | ${0}
    ${5} | ${[2, 3, 19, 10, 8]}             | ${3} | ${3}
    ${6} | ${[1, 10, 5]}                    | ${4} | ${1}
    ${7} | ${[8, 3, 1, 4, 5, 10, 7, 3]}     | ${1} | ${4}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getCountOfRemovedElems(array, k)).toBe(result);
  });
});
