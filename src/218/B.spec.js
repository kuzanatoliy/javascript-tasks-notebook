const { isOneRace } = require('./B');

describe('218B. Airport', () => {
  it.each`
    n    | num   | arr                 | result
    ${1} | ${4}  | ${[2, 1, 1]}        | ${[5, 5]}
    ${2} | ${4}  | ${[2, 2, 2]}        | ${[7, 6]}
    ${3} | ${10} | ${[10, 3, 3, 1, 2]} | ${[58, 26]}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(isOneRace(num, arr)).toStrictEqual(result);
  });
});
