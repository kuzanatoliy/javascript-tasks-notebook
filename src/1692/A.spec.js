const { getCountOfParticipantsInFront } = require('./A');

describe('1692A. Marathon', () => {
  it.each`
    n    | distances                 | result
    ${1} | ${[2, 3, 4, 1]}           | ${2}
    ${2} | ${[10000, 0, 1, 2]}       | ${0}
    ${3} | ${[500, 600, 400, 300]}   | ${1}
    ${4} | ${[0, 9999, 10000, 9998]} | ${3}
  `('Base test: $n', ({ distances, result }) => {
    expect(getCountOfParticipantsInFront(distances)).toBe(result);
  });
});
