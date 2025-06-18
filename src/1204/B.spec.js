const { getSums } = require('./B');

describe('1204B. Mislove Has Lost an Array', () => {
  it.each`
    n    | num  | l    | r    | result
    ${1} | ${4} | ${2} | ${2} | ${[5, 7]}
    ${2} | ${5} | ${1} | ${5} | ${[5, 31]}
  `('Base test: $n', ({ num, l, r, result }) => {
    expect(getSums(num, l, r)).toStrictEqual(result);
  });
});
