const { isItPossibleToRepresent } = require('./C');

describe('1095C. Powers Of Two', () => {
  it.each`
    n    | number | k    | result
    ${1} | ${9}   | ${4} | ${['YES', [1, 2, 2, 4]]}
    ${2} | ${8}   | ${1} | ${['YES', [8]]}
    ${3} | ${5}   | ${1} | ${['NO']}
    ${4} | ${3}   | ${7} | ${['NO']}
  `('Base test: $n', ({ number, k, result }) => {
    expect(isItPossibleToRepresent(number, k)).toStrictEqual(result);
  });
});
