const { getSortedNumbers } = require('./A');

describe('1971A. My First Sorting Problem', () => {
  it.each`
    n     | a    | b    | result
    ${1}  | ${1} | ${9} | ${[1, 9]}
    ${2}  | ${8} | ${4} | ${[4, 8]}
    ${3}  | ${1} | ${4} | ${[1, 4]}
    ${4}  | ${3} | ${4} | ${[3, 4]}
    ${5}  | ${2} | ${0} | ${[2, 0]}
    ${6}  | ${2} | ${4} | ${[2, 4]}
    ${7}  | ${6} | ${9} | ${[6, 9]}
    ${8}  | ${3} | ${3} | ${[3, 3]}
    ${9}  | ${0} | ${0} | ${[0, 0]}
    ${10} | ${9} | ${9} | ${[9, 9]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getSortedNumbers(a, b)).toStrictEqual(result);
  });
});
