const { isItPossibleToMeetWishes } = require('./B');

describe('1567B. Chess Tournament', () => {
  it.each`
    n    | map       | result
    ${1} | ${'111'}  | ${['YES', [['X', '=', '='], ['=', 'X', '='], ['=', '=', 'X']]]}
    ${2} | ${'21'}   | ${['NO']}
    ${3} | ${'2122'} | ${['YES', [['X', '-', '+', '-'], ['+', 'X', '+', '+'], ['-', '-', 'X', '+'], ['+', '-', '-', 'X']]]}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToMeetWishes(map)).toStrictEqual(result);
  });
});
