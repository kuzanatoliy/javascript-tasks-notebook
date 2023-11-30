const { getCountOfMoves } = require('./A');

describe('1409A. Yet Another Two Integers Problem', () => {
  it.each`
    n    | number       | target        | result
    ${1} | ${5}         | ${5}          | ${0}
    ${2} | ${13}        | ${42}         | ${3}
    ${3} | ${18}        | ${4}          | ${2}
    ${4} | ${1337}      | ${420}        | ${92}
    ${5} | ${123456789} | ${1000000000} | ${87654322}
    ${6} | ${100500}    | ${9000}       | ${9150}
  `('Base test: $n', ({ number, target, result }) => {
    expect(getCountOfMoves(number, target)).toBe(result);
  });
});
