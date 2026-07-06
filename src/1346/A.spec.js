const { getDivisions } = require('./A');

describe('1346A. Color Revolution', () => {
  it.each`
    n    | num          | k      | result
    ${1} | ${40}        | ${3}   | ${[1, 3, 9, 27]}
    ${2} | ${1200}      | ${7}   | ${[3, 21, 147, 1029]}
    ${3} | ${320802005} | ${400} | ${[5, 2000, 800000, 320000000]}
    ${4} | ${4}         | ${1}   | ${[1, 1, 1, 1]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getDivisions(num, k)).toStrictEqual(result);
  });
});
