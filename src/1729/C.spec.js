const { getPathArtifacts } = require('./C');

describe('1729C. Jumping on Tiles', () => {
  it.each`
    n    | str              | result
    ${1} | ${'logic'}       | ${[9, [1, 4, 3, 5]]}
    ${2} | ${'codeforces'}  | ${[16, [1, 8, 3, 4, 9, 5, 2, 6, 7, 10]]}
    ${3} | ${'bca'}         | ${[1, [1, 3]]}
    ${4} | ${'aaaaaaaaaaa'} | ${[0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]}
    ${5} | ${'adbaadabad'}  | ${[3, [1, 4, 5, 7, 9, 3, 8, 2, 6, 10]]}
    ${6} | ${'to'}          | ${[5, [1, 2]]}
  `('Base test: $n', ({ str, result }) => {
    expect(getPathArtifacts(str)).toStrictEqual(result);
  });
});
