const { getDifs } = require('./C');

describe('1760C. Advantage', () => {
  it.each`
    n    | string             | result
    ${1} | ${[4, 7, 3, 5]}    | ${[-3, 2, -4, -2]}
    ${2} | ${[1, 2]}          | ${[-1, 1]}
    ${3} | ${[1, 2, 3, 4, 5]} | ${[-4, -3, -2, -1, 1]}
    ${4} | ${[4, 9, 4]}       | ${[-5, 5, -5]}
    ${5} | ${[4, 4, 4, 4]}    | ${[0, 0, 0, 0]}
  `('Base test: $n', ({ string, result }) => {
    expect(getDifs(string)).toStrictEqual(result);
  });
});
