const { isItPossibleToRepresent } = require('./A');

describe('1388A. Captain Flint and Crew Recruitment', () => {
  it.each`
    n    | num    | result
    ${1} | ${7}   | ${['NO']}
    ${2} | ${23}  | ${['NO']}
    ${3} | ${31}  | ${['YES', [6, 10, 14, 1]]}
    ${4} | ${36}  | ${['YES', [6, 10, 15, 5]]}
    ${5} | ${44}  | ${['YES', [6, 10, 15, 13]]}
    ${6} | ${100} | ${['YES', [6, 10, 14, 70]]}
    ${7} | ${258} | ${['YES', [6, 10, 14, 228]]}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPossibleToRepresent(num)).toStrictEqual(result);
  });
});
