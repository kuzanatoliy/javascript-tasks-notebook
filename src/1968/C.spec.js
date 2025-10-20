const { transformArray } = require('./C');

describe('1968C. Assembly via Remainders', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 4, 1]}       | ${[501, 503, 507, 508]}
    ${2} | ${[1, 1]}          | ${[501, 502, 503]}
    ${3} | ${[4, 2, 5, 1, 2]} | ${[501, 505, 507, 512, 513, 515]}
    ${4} | ${[500]}           | ${[501, 1001]}
    ${5} | ${[1, 5]}          | ${[501, 502, 507]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
