const { getRestoringThreeNumbers } = require('./A');

describe('1154A. Restoring Three Numbers', () => {
  it.each`
    n    | numbers                 | result
    ${1} | ${[3, 6, 5, 4]}         | ${[1, 2, 3]}
    ${2} | ${[40, 40, 40, 60]}     | ${[20, 20, 20]}
    ${3} | ${[201, 101, 101, 200]} | ${[1, 100, 100]}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getRestoringThreeNumbers(...numbers)).toStrictEqual(result);
  });
});
