const { getCubs } = require('./B');

describe('1790B. Taisia and Dice', () => {
  it.each`
    n    | number | sum   | r     | result
    ${1} | ${2}   | ${2}  | ${1}  | ${[1, 1]}
    ${2} | ${2}   | ${4}  | ${2}  | ${[2, 2]}
    ${3} | ${4}   | ${9}  | ${5}  | ${[4, 2, 2, 1]}
    ${4} | ${5}   | ${17} | ${11} | ${[6, 3, 3, 3, 2]}
    ${5} | ${3}   | ${15} | ${10} | ${[5, 5, 5]}
    ${6} | ${4}   | ${4}  | ${3}  | ${[1, 1, 1, 1]}
    ${7} | ${5}   | ${20} | ${15} | ${[5, 4, 4, 4, 3]}
  `('Base test: $n', ({ number, sum, r, result }) => {
    expect(getCubs(number, sum, r)).toStrictEqual(result);
  });
});
