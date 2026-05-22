const { getCountOfReplacement } = require('./A');

describe('779A. Pupils Redistribution', () => {
  it.each`
    n    | arrA                           | arrB                           | result
    ${1} | ${[5, 4, 4, 4]}                | ${[5, 5, 4, 5]}                | ${1}
    ${2} | ${[1, 1, 1, 1, 1, 1]}          | ${[5, 5, 5, 5, 5, 5]}          | ${3}
    ${3} | ${[5]}                         | ${[3]}                         | ${-1}
    ${4} | ${[3, 2, 5, 5, 2, 3, 3, 3, 2]} | ${[4, 1, 4, 1, 1, 2, 4, 4, 1]} | ${4}
    ${5} | ${[1, 1, 2, 2, 3, 4]}          | ${[1, 2, 3, 3, 4, 4]}          | ${-1}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfReplacement(arrA, arrB)).toStrictEqual(result);
  });
});
