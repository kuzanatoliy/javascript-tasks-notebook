const { getCountOfUnreadedChapters } = require('./A');

describe('1136B. Nastya Is Playing Computer Games', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${2} | ${2} | ${6}
    ${2} | ${4} | ${2} | ${13}
    ${3} | ${5} | ${1} | ${15}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfUnreadedChapters(num, k)).toBe(result);
  });
});
