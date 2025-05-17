const { transformBan } = require('./B');

describe('1747A. Two Groups', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[[2, 3]]}
    ${2} | ${2} | ${[[2, 6]]}
    ${3} | ${3} | ${[[2, 9], [5, 6]]}
  `('Base test: $n', ({ num, result }) => {
    expect(transformBan(num)).toStrictEqual(result);
  });
});
