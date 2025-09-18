const { isItPossibleToFit } = require('./N');

describe('1468N. Waste Sorting', () => {
  it.each`
    n    | boxes           | items                | result
    ${1} | ${[1, 2, 3]}    | ${[1, 2, 3, 0, 0]}   | ${'YES'}
    ${2} | ${[2, 2, 3]}    | ${[1, 2, 3, 1, 0]}   | ${'YES'}
    ${3} | ${[2, 2, 3]}    | ${[1, 2, 3, 0, 1]}   | ${'NO'}
    ${4} | ${[1, 2, 5]}    | ${[1, 2, 3, 1, 1]}   | ${'YES'}
    ${5} | ${[0, 0, 0]}    | ${[0, 0, 0, 0, 0]}   | ${'YES'}
    ${6} | ${[0, 0, 4]}    | ${[1, 0, 0, 0, 0]}   | ${'NO'}
    ${7} | ${[13, 37, 42]} | ${[0, 0, 0, 40, 47]} | ${'YES'}
  `('Base test: $n', ({ boxes, items, result }) => {
    expect(isItPossibleToFit(boxes, items)).toBe(result);
  });
});
