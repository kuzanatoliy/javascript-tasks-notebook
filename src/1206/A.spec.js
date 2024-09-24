const { getUniqValue } = require('./A');

describe('1206A. Cards', () => {
  it.each`
    n    | arr1            | arr2               | result
    ${1} | ${[20]}         | ${[10, 20]}        | ${[20, 20]}
    ${2} | ${[3, 2, 2]}    | ${[1, 5, 7, 7, 9]} | ${[3, 9]}
    ${3} | ${[1, 3, 5, 7]} | ${[7, 5, 3, 1]}    | ${[7, 7]}
  `('Base test: $n', ({ arr1, arr2, result }) => {
    expect(getUniqValue(arr1, arr2)).toStrictEqual(result);
  });
});
