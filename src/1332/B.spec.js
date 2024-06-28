const { getColors } = require('./B');

describe('1332B. Composite Coloring', () => {
  it.each`
    n    | array                                                                                                                  | result
    ${1} | ${[6, 10, 15]}                                                                                                         | ${[2, [1, 1, 2]]}
    ${2} | ${[4, 9]}                                                                                                              | ${[2, [1, 2]]}
    ${3} | ${[437, 519, 865, 808, 909, 391, 194, 291, 237, 395, 323, 365, 511, 497, 781, 737, 871, 559, 731, 697, 779, 841, 961]} | ${[10, [8, 2, 3, 1, 2, 7, 1, 2, 2, 3, 7, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10]]}
  `('Base test: $n', ({ array, result }) => {
    expect(getColors(array)).toStrictEqual(result);
  });
});
