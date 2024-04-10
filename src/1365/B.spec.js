const { isItPossibleToSort } = require('./B');

describe('1365A. C+=', () => {
  it.each`
    n    | elems                | types           | result
    ${1} | ${[10, 20, 20, 30]}  | ${[0, 1, 0, 1]} | ${'YES'}
    ${2} | ${[3, 1, 2]}         | ${[0, 1, 1]}    | ${'YES'}
    ${3} | ${[2, 2, 4, 8]}      | ${[1, 1, 1, 1]} | ${'YES'}
    ${4} | ${[5, 15, 4]}        | ${[0, 0, 0]}    | ${'NO'}
    ${4} | ${[20, 10, 100, 50]} | ${[1, 0, 0, 1]} | ${'YES'}
  `('Base test: $n', ({ elems, types, result }) => {
    expect(isItPossibleToSort(elems, types)).toBe(result);
  });
});
