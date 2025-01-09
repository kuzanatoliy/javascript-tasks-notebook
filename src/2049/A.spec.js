const { getCountOfOperations } = require('./A');

describe('2049A. MEX Destruction', () => {
  it.each`
    n     | array                        | result
    ${1}  | ${[0, 1, 2, 3]}              | ${1}
    ${2}  | ${[0, 0, 0, 0, 0, 0]}        | ${0}
    ${3}  | ${[1, 0, 1, 0, 1]}           | ${2}
    ${4}  | ${[3, 1, 4, 1, 5]}           | ${1}
    ${5}  | ${[3, 2, 1, 0]}              | ${1}
    ${6}  | ${[9, 100, 0, 89, 12, 2, 3]} | ${2}
    ${7}  | ${[0, 3, 9, 0]}              | ${1}
    ${8}  | ${[0, 7, 0, 2, 0, 7, 0]}     | ${2}
    ${9}  | ${[0]}                       | ${0}
    ${10} | ${[0, 1]}                    | ${1}
    ${11} | ${[1, 0, 0]}                 | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
