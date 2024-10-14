const { getPair } = require('./E');

describe('1790E. Vlad and a Pair of Numbers', () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${[3, 1]}
    ${2} | ${5}  | ${[-1]}
    ${3} | ${10} | ${[15, 5]}
    ${4} | ${6}  | ${[-1]}
    ${5} | ${18} | ${[27, 9]}
    ${6} | ${36} | ${[54, 18]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPair(num)).toStrictEqual(result);
  });
});
