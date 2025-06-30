const { isItPossibleToChoose } = require('./A');

describe('572A. Arrays', () => {
  it.each`
    n    | k    | m    | arrA               | arrB         | result
    ${1} | ${2} | ${1} | ${[1, 2, 3]}       | ${[3, 4, 5]} | ${'YES'}
    ${2} | ${3} | ${3} | ${[1, 2, 3]}       | ${[3, 4, 5]} | ${'NO'}
    ${3} | ${3} | ${1} | ${[1, 1, 1, 1, 1]} | ${[2, 2]}    | ${'YES'}
  `('Base test: $n', ({ k, m, arrA, arrB, result }) => {
    expect(isItPossibleToChoose(k, m, arrA, arrB)).toBe(result);
  });
});
