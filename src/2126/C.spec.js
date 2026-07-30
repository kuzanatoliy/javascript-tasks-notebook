const { isItPossibleToArrive } = require('./C');

describe('2126C. I Will Definitely Make It', () => {
  it.each`
    n    | k    | arr                   | result
    ${1} | ${3} | ${[3, 2, 1, 4, 5]}    | ${'YES'}
    ${2} | ${1} | ${[1, 3, 4]}          | ${'NO'}
    ${3} | ${4} | ${[4, 4, 4, 2]}       | ${'YES'}
    ${4} | ${2} | ${[2, 3, 6, 9, 1, 2]} | ${'YES'}
    ${5} | ${2} | ${[1, 2, 5, 6]}       | ${'NO'}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(isItPossibleToArrive(k, arr)).toBe(result);
  });
});
