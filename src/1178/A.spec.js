const { getBand } = require('./A');

describe('1178A. Prime Minister', () => {
  it.each`
    n    | arr                 | result
    ${1} | ${[100, 50, 50]}    | ${[1, 2, 3]}
    ${2} | ${[80, 60, 60]}     | ${[]}
    ${3} | ${[6, 5]}           | ${[1]}
    ${4} | ${[51, 25, 99, 25]} | ${[1, 2, 4]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getBand(arr)).toStrictEqual(result);
  });
});
