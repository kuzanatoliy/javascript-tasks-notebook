const { isItPossibleToReachCell } = require('./B');

describe('1519B. The Cake Is a Lie', () => {
  it.each`
    n    | nn     | mm     | k        | result
    ${1} | ${1}   | ${1}   | ${0}     | ${'YES'}
    ${2} | ${2}   | ${2}   | ${2}     | ${'NO'}
    ${3} | ${2}   | ${2}   | ${3}     | ${'YES'}
    ${4} | ${2}   | ${2}   | ${4}     | ${'NO'}
    ${5} | ${1}   | ${4}   | ${3}     | ${'YES'}
    ${6} | ${100} | ${100} | ${10000} | ${'NO'}
  `('Base test: $n', ({ nn, mm, k, result }) => {
    expect(isItPossibleToReachCell(nn, mm, k)).toBe(result);
  });
});
