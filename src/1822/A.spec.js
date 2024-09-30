const { getTheBestMovie } = require('./A');

describe('1822A. TubeTube Feed', () => {
  it.each`
    n    | arrA                | arrB               | k      | result
    ${1} | ${[1, 5, 7, 6, 6]}  | ${[3, 4, 7, 1, 9]} | ${9}   | ${3}
    ${2} | ${[4, 3, 3, 2]}     | ${[1, 2, 3, 4]}    | ${4}   | ${2}
    ${3} | ${[5, 5, 5, 5, 5]}  | ${[2, 1, 3, 9, 7]} | ${7}   | ${3}
    ${4} | ${[54, 71, 69, 96]} | ${[42, 24, 99, 1]} | ${33}  | ${-1}
    ${5} | ${[55, 66]}         | ${[77, 88]}        | ${179} | ${2}
    ${6} | ${[2, 2]}           | ${[10, 3]}         | ${2}   | ${1}
  `('Base test: $n', ({ arrA, arrB, k, result }) => {
    expect(getTheBestMovie(arrA, arrB, k)).toBe(result);
  });
});
