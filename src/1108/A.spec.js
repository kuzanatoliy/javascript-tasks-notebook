const { getPoints } = require('./A');

describe('1108A. Two distinct points', () => {
  it.each`
    n    | l1   | r1   | l2   | r2   | result
    ${1} | ${1} | ${2} | ${1} | ${2} | ${[1, 2]}
    ${2} | ${2} | ${6} | ${3} | ${4} | ${[2, 3]}
    ${3} | ${2} | ${4} | ${1} | ${3} | ${[2, 1]}
    ${4} | ${1} | ${2} | ${1} | ${3} | ${[1, 3]}
    ${5} | ${1} | ${4} | ${5} | ${8} | ${[1, 5]}
  `('Base test: $n', ({ l1, r1, l2, r2, result }) => {
    expect(getPoints(l1, r1, l2, r2)).toStrictEqual(result);
  });
});
