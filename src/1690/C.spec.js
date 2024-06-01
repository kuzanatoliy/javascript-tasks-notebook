const { getDurations } = require('./C');

describe('1690B. Array Decrements', () => {
  it.each`
    n    | arrayS                                              | arrayF                                                     | result
    ${1} | ${[0, 3, 7]}                                        | ${[2, 10, 11]}                                             | ${[2, 7, 1]}
    ${2} | ${[10, 15]}                                         | ${[11, 16]}                                                | ${[1, 1]}
    ${3} | ${[12, 16, 90, 195, 1456, 1569, 3001, 5237, 19275]} | ${[13, 199, 200, 260, 9100, 10000, 10914, 91066, 5735533]} | ${[1, 183, 1, 60, 7644, 900, 914, 80152, 5644467]}
    ${4} | ${[0]}                                              | ${[1000000000]}                                            | ${[1000000000]}
  `('Base test: $n', ({ arrayS, arrayF, result }) => {
    expect(getDurations(arrayS, arrayF)).toStrictEqual(result);
  });
});
