const { findPlace } = require('./A');

describe('748A. Santa Claus and a Place in a Class', () => {
  it.each`
    n    | num  | m    | k     | result
    ${1} | ${4} | ${3} | ${9}  | ${[2, 2, 'L']}
    ${2} | ${4} | ${3} | ${24} | ${[4, 3, 'R']}
    ${3} | ${2} | ${4} | ${4}  | ${[1, 2, 'R']}
  `('Base test: $n', ({ num, m, k, result }) => {
    expect(findPlace(num, m, k)).toStrictEqual(result);
  });
});
