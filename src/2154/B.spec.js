const { getCountOfOperations } = require('./B');

describe('2154B. Make it Zigzag', () => {
  it.each`
    n    | arr                                     | result
    ${1} | ${[1, 4, 2, 5, 3]}                      | ${0}
    ${2} | ${[3, 3, 2, 1]}                         | ${1}
    ${3} | ${[6, 6, 6, 6, 6]}                      | ${3}
    ${4} | ${[1, 2, 3, 4, 5, 6, 7]}                | ${6}
    ${5} | ${[3, 2, 1]}                            | ${1}
    ${6} | ${[1, 2]}                               | ${0}
    ${7} | ${[65, 85, 19, 53, 21, 79, 92, 29, 96]} | ${13}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toStrictEqual(result);
  });
});
