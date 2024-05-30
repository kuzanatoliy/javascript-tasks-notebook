const { getCountOfAdds } = require('./A');

describe('1490A. Dense Array', () => {
  it.each`
    n    | array                                              | result
    ${1} | ${[4, 2, 10, 1]}                                   | ${5}
    ${2} | ${[1, 3]}                                          | ${1}
    ${3} | ${[6, 1]}                                          | ${2}
    ${4} | ${[1, 4, 2]}                                       | ${1}
    ${5} | ${[1, 2, 3, 4, 3]}                                 | ${0}
    ${6} | ${[4, 31, 25, 50, 30, 20, 34, 46, 42, 16, 15, 16]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfAdds(array)).toBe(result);
  });
});
