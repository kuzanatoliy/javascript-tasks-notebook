const { getTasksCount } = require('./B');

describe('2260B. Monocarp and Projects', () => {
  it.each`
    n    | x      | y          | k                 | result
    ${1} | ${1n}  | ${1n}      | ${1n}             | ${0n}
    ${2} | ${3n}  | ${10n}     | ${2n}             | ${4n}
    ${3} | ${3n}  | ${8n}      | ${6n}             | ${18n}
    ${4} | ${7n}  | ${20n}     | ${1n}             | ${6n}
    ${5} | ${10n} | ${25n}     | ${100n}           | ${1425n}
    ${6} | ${8n}  | ${36n}     | ${17n}            | ${110n}
    ${7} | ${1n}  | ${999900n} | ${1000000000000n} | ${999898177699820694n}
  `('Base test: $n', ({ x, y, k, result }) => {
    expect(getTasksCount(x, y, k)).toBe(result);
  });
});
