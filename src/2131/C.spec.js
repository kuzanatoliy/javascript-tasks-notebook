const { isItPossibleToTransform } = require('./C');

describe('2131C. Make it Equal', () => {
  it.each`
    n    | k    | arrA         | arrB          | result
    ${1} | ${3} | ${[1]}       | ${[2]}        | ${'YES'}
    ${2} | ${8} | ${[4]}       | ${[12]}       | ${'YES'}
    ${3} | ${5} | ${[6, 2, 9]} | ${[8, 4, 11]} | ${'YES'}
    ${4} | ${7} | ${[2, 8]}    | ${[2, 9]}     | ${'NO'}
    ${5} | ${2} | ${[0, 1, 0]} | ${[1, 0, 1]}  | ${'NO'}
  `('Base test: $n', ({ k, arrA, arrB, result }) => {
    expect(isItPossibleToTransform(k, arrA, arrB)).toStrictEqual(result);
  });
});
