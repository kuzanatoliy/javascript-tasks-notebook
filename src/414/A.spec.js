const { getInitArray } = require('./A');

describe('414A. Mashmokh and Numbers', () => {
  it.each`
    n    | length | k    | result
    ${1} | ${5}   | ${2} | ${[1, 2, 3, 4, 5]}
    ${2} | ${5}   | ${3} | ${[2, 4, 5, 6, 7]}
    ${3} | ${7}   | ${2} | ${-1}
    ${4} | ${1}   | ${1} | ${-1}
    ${5} | ${1}   | ${0} | ${[1]}
  `('Base test: $n', ({ length, k, result }) => {
    expect(getInitArray(length, k)).toStrictEqual(result);
  });
});
