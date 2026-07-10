const { getMaxScore } = require('./C');

describe('1914C. Quests', () => {
  it.each`
    n    | k    | arrA                   | arrB                  | result
    ${1} | ${7} | ${[4, 3, 1, 2]}        | ${[1, 1, 1, 1]}       | ${13}
    ${2} | ${2} | ${[1, 2, 5]}           | ${[3, 1, 8]}          | ${4}
    ${3} | ${5} | ${[3, 2, 4, 1, 4]}     | ${[2, 3, 1, 4, 7]}    | ${15}
    ${4} | ${4} | ${[1, 4, 5, 4, 5, 10]} | ${[1, 5, 1, 2, 5, 1]} | ${15}
  `('Base test: $n', ({ k, arrA, arrB, result }) => {
    expect(getMaxScore(k, arrA, arrB)).toStrictEqual(result);
  });
});
