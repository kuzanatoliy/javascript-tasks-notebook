const { getOperationsCount } = require('./B');

describe('2027B. Stalin Sort', () => {
  it.each`
    n    | stamps                                                                           | result
    ${1} | ${[3, 6, 4, 9, 2, 5, 2]}                                                         | ${2}
    ${2} | ${[5, 4, 4, 2, 2]}                                                               | ${0}
    ${3} | ${[2, 2, 4, 4, 6, 6, 10, 10]}                                                    | ${6}
    ${4} | ${[1000]}                                                                        | ${0}
    ${5} | ${[6, 8, 9, 10, 12, 9, 7, 5, 4]}                                                 | ${4}
    ${6} | ${[300000000, 600000000, 400000000, 900000000, 200000000, 400000000, 200000000]} | ${2}
  `('Base test: $n', ({ stamps, result }) => {
    expect(getOperationsCount(stamps)).toBe(result);
  });
});
