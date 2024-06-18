const { getGroupsCount } = require('./B');

describe('1355B. Young Explorers', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 1, 1]}       | ${3}
    ${2} | ${[2, 3, 1, 2, 2]} | ${2}
    ${3} | ${[3, 1, 1]}       | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getGroupsCount(array)).toBe(result);
  });
});
