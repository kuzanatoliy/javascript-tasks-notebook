const { getMaxArea } = require('./B');

describe('1620B. Triangles on a Rectangle', () => {
  it.each`
    n    | w     | h    | arr1            | arr2            | arr3            | arr4            | result
    ${1} | ${5}  | ${8} | ${[2, 1, 2]}    | ${[3, 2, 3, 4]} | ${[3, 1, 4, 6]} | ${[2, 4, 5]}    | ${25}
    ${2} | ${10} | ${7} | ${[2, 3, 9]}    | ${[2, 1, 7]}    | ${[3, 1, 3, 4]} | ${[3, 4, 5, 6]} | ${42}
    ${3} | ${11} | ${5} | ${[3, 1, 6, 8]} | ${[3, 3, 6, 8]} | ${[3, 1, 3, 4]} | ${[2, 2, 4]}    | ${35}
  `('Base test: $n', ({ w, h, arr1, arr2, arr3, arr4, result }) => {
    expect(getMaxArea(w, h, arr1, arr2, arr3, arr4)).toBe(result);
  });
});
