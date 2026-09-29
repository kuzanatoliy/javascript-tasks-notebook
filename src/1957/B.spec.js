const { getBitConstruction } = require('./B');

describe('1957B. A BIT of a Construction', () => {
  it.each`
    n    | num  | k     | result
    ${1} | ${1} | ${5}  | ${[5]}
    ${2} | ${2} | ${3}  | ${[3, 0]}
    ${3} | ${2} | ${5}  | ${[3, 2]}
    ${4} | ${6} | ${51} | ${[31, 20, 0, 0, 0, 0]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getBitConstruction(num, k)).toStrictEqual(result);
  });
});
