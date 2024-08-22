const { isItPossibleToPutRewards } = require('./A');

describe('448A. Rewards', () => {
  it.each`
    n    | cups         | medals       | shelves | result
    ${1} | ${[1, 1, 1]} | ${[1, 1, 1]} | ${4}    | ${'YES'}
    ${2} | ${[1, 1, 3]} | ${[2, 3, 4]} | ${2}    | ${'YES'}
    ${3} | ${[1, 0, 0]} | ${[1, 0, 0]} | ${1}    | ${'NO'}
  `('Base test: $n', ({ cups, medals, shelves, result }) => {
    expect(isItPossibleToPutRewards(cups, medals, shelves)).toBe(result);
  });
});
