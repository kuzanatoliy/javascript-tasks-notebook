const { getMaxCountOfBoards } = require('./A');

describe('2194A. Lawn Mower', () => {
  it.each`
    n    | num     | w     | result
    ${1} | ${9}    | ${3}  | ${6}
    ${2} | ${13}   | ${4}  | ${10}
    ${3} | ${15}   | ${14} | ${14}
    ${4} | ${20}   | ${1}  | ${0}
    ${5} | ${1000} | ${42} | ${977}
  `('Base test: $n', ({ num, w, arr, result }) => {
    expect(getMaxCountOfBoards(num, w, arr)).toBe(result);
  });
});
