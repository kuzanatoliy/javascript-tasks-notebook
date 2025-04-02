const { getPair } = require('./A');

describe('747A. Display Size', () => {
  it.each`
    n    | num       | result
    ${1} | ${8}      | ${[2, 4]}
    ${2} | ${64}     | ${[8, 8]}
    ${3} | ${5}      | ${[1, 5]}
    ${4} | ${999999} | ${[999, 1001]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPair(num)).toStrictEqual(result);
  });
});
