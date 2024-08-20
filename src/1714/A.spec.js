const { getSleepingTime } = require('./A');

describe('1714A. Everyone Loves to Sleep', () => {
  it.each`
    n    | h     | m     | points                          | result
    ${1} | ${6}  | ${13} | ${[[8, 0]]}                     | ${[1, 47]}
    ${2} | ${6}  | ${0}  | ${[[12, 30], [14, 45], [6, 0]]} | ${[0, 0]}
    ${3} | ${23} | ${35} | ${[[20, 15], [10, 30]]}         | ${[10, 55]}
  `('Base test: $n', ({ h, m, points, result }) => {
    expect(getSleepingTime(h, m, points)).toStrictEqual(result);
  });
});
