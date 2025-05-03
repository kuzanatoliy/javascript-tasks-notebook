const { getMaxPosition } = require('./B');

describe('1872B. The Corridor or There and Back Again', () => {
  it.each`
    n    | rooms                                    | result
    ${1} | ${[[2, 2]]}                              | ${2}
    ${2} | ${[[2, 8], [4, 3], [5, 2]]}              | ${5}
    ${3} | ${[[200, 200]]}                          | ${299}
    ${4} | ${[[1, 20], [5, 9], [3, 179], [100, 1]]} | ${9}
    ${5} | ${[[10, 1], [1, 18]]}                    | ${9}
    ${6} | ${[[1, 1], [1, 2]]}                      | ${1}
    ${7} | ${[[1, 3], [1, 1], [1, 3]]}              | ${1}
  `('Base test: $n', ({ rooms, result }) => {
    expect(getMaxPosition(rooms)).toBe(result);
  });
});
