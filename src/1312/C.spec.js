const { isItPossibleToAchiveTheArray } = require('./C');

describe('1312C. Adding Powers', () => {
  it.each`
    n    | array              | k      | result
    ${1} | ${[0, 0, 0, 0]}    | ${100} | ${'YES'}
    ${2} | ${[1]}             | ${2}   | ${'YES'}
    ${3} | ${[1, 4, 1]}       | ${4}   | ${'NO'}
    ${4} | ${[0, 1, 3]}       | ${2}   | ${'NO'}
    ${5} | ${[0, 59049, 810]} | ${9}   | ${'YES'}
  `('Base test: $n', ({ array, k, result }) => {
    expect(isItPossibleToAchiveTheArray(array, k)).toBe(result);
  });
});
