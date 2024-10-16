const { isProgressiveSquare } = require('./A');

describe('1955A. Yogurt Sale', () => {
  it.each`
    n    | mum  | c      | d      | array                                                            | result
    ${1} | ${3} | ${2}   | ${3}   | ${[3, 9, 6, 5, 7, 1, 10, 4, 8]}                                  | ${'NO'}
    ${2} | ${3} | ${2}   | ${3}   | ${[3, 9, 6, 5, 7, 1, 11, 4, 8]}                                  | ${'YES'}
    ${3} | ${2} | ${100} | ${100} | ${[400, 300, 400, 500]}                                          | ${'YES'}
    ${4} | ${3} | ${2}   | ${3}   | ${[3, 9, 6, 6, 5, 1, 11, 4, 8]}                                  | ${'NO'}
    ${5} | ${4} | ${4}   | ${4}   | ${[15, 27, 7, 19, 23, 23, 11, 15, 7, 3, 19, 23, 11, 15, 11, 15]} | ${'NO'}
  `('Base test: $n', ({ num, c, d, array, result }) => {
    expect(isProgressiveSquare(num, c, d, array)).toBe(result);
  });
});
