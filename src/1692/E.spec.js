const { getCountOfOperations } = require('./E');

describe('1692E. Binary Deque', () => {
  it.each`
    n    | array                                               | purpose | result
    ${1} | ${[1, 0, 0]}                                        | ${1}    | ${0}
    ${2} | ${[1, 1, 0]}                                        | ${1}    | ${1}
    ${3} | ${[0, 1, 0, 1, 1, 1, 0, 0, 1]}                      | ${3}    | ${3}
    ${4} | ${[1, 1, 1, 1, 1, 1]}                               | ${4}    | ${2}
    ${5} | ${[0, 0, 1, 1, 0]}                                  | ${1}    | ${2}
    ${6} | ${[1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1]} | ${2}    | ${7}
    ${7} | ${[1, 0, 1, 0, 0, 0]}                               | ${3}    | ${-1}
    ${8} | ${[0, 1, 0, 1, 0, 1, 1, 0]}                         | ${1}    | ${5}
  `('Base test: $n', ({ array, purpose, result }) => {
    expect(getCountOfOperations(array, purpose)).toStrictEqual(result);
  });
});
