const { getRemovedElements } = require('./A');

describe('1916A. 2023', () => {
  it.each`
    n    | array             | k    | result
    ${1} | ${[5, 2]}         | ${2} | ${['NO']}
    ${2} | ${[7, 17, 7]}     | ${1} | ${['NO']}
    ${3} | ${[1, 289, 1, 1]} | ${2} | ${['YES', [1, 7]]}
    ${4} | ${[7, 17, 17]}    | ${1} | ${['YES', [1]]}
    ${5} | ${[289]}          | ${1} | ${['YES', [7]]}
    ${6} | ${[2023]}         | ${1} | ${['YES', [1]]}
    ${7} | ${[1]}            | ${3} | ${['YES', [1, 1, 2023]]}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getRemovedElements(array, k)).toStrictEqual(result);
  });
});
