const { getCountOfRedNumbers } = require('./A');

describe('2019A. Max Plus Size', () => {
  it.each`
    n    | arr                                     | result
    ${1} | ${[5, 4, 5]}                            | ${7}
    ${2} | ${[4, 5, 4]}                            | ${6}
    ${3} | ${[3, 3, 3, 3, 4, 1, 2, 3, 4, 5]}       | ${10}
    ${4} | ${[17, 89, 92, 42, 29, 92, 14, 70, 45]} | ${97}
    ${5} | ${[2, 4, 4]}                            | ${6}
    ${6} | ${[6]}                                  | ${7}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfRedNumbers(arr)).toBe(result);
  });
});
