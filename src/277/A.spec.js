const { getCountOfClasses } = require('./A');

describe('277A. Learning Languages', () => {
  it.each`
    n    | emplProps                                                                       | languages | result
    ${1} | ${[[1, 2], [2, 2, 3], [2, 3, 4], [2, 4, 5], [1, 5]]}                            | ${5}      | ${0}
    ${2} | ${[[0], [3, 1, 2, 3], [1, 1], [2, 5, 4], [2, 6, 7], [1, 3], [2, 7, 4], [1, 1]]} | ${7}      | ${2}
    ${3} | ${[[2, 2], [0]]}                                                                | ${2}      | ${1}
  `('Base test: $n', ({ emplProps, languages, result }) => {
    expect(getCountOfClasses(emplProps, languages)).toBe(result);
  });
});
