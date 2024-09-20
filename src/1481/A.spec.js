const { isItPossibleToFix } = require('./A');

describe('1481A. Space Navigation', () => {
  it.each`
    n    | road                 | p           | result
    ${1} | ${'RRRRRRRRRRUUUUU'} | ${[10, 5]}  | ${'YES'}
    ${2} | ${'UDDDRLLL'}        | ${[1, 1]}   | ${'YES'}
    ${3} | ${'LDLDLDDDR'}       | ${[-3, -5]} | ${'YES'}
    ${4} | ${'LLLLUU'}          | ${[1, 2]}   | ${'NO'}
    ${5} | ${'RDULRLLDR'}       | ${[3, -2]}  | ${'YES'}
    ${6} | ${'RUDURUUUUR'}      | ${[-1, 6]}  | ${'NO'}
  `('Base test: $n', ({ road, p, result }) => {
    expect(isItPossibleToFix(road, p)).toBe(result);
  });
});
