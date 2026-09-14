const { getNumber } = require('./C');

describe('2074C. XOR and Triangle', () => {
  it.each`
    n    | num    | result
    ${1} | ${5}   | ${3}
    ${2} | ${2}   | ${-1}
    ${3} | ${6}   | ${3}
    ${4} | ${3}   | ${-1}
    ${5} | ${69}  | ${63}
    ${6} | ${4}   | ${-1}
    ${7} | ${420} | ${255}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumber(num)).toBe(result);
  });
});
