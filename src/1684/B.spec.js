const { getIntegers } = require('./B');

describe('1684B. Z mod X = C', () => {
  it.each`
    n    | a      | b      | c      | result
    ${1} | ${1}   | ${3}   | ${4}   | ${[8, 7, 4]}
    ${2} | ${127} | ${234} | ${421} | ${[782, 655, 421]}
    ${3} | ${2}   | ${7}   | ${8}   | ${[17, 15, 8]}
    ${4} | ${59}  | ${94}  | ${388} | ${[541, 482, 388]}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getIntegers(a, b, c)).toStrictEqual(result);
  });
});
