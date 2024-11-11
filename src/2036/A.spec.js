const { isItPerfectMelody } = require('./A');

describe('2036A. Quintomania', () => {
  it.each`
    n    | arr                                         | result
    ${1} | ${[114, 109]}                               | ${'YES'}
    ${2} | ${[17, 10]}                                 | ${'YES'}
    ${3} | ${[76, 83, 88]}                             | ${'YES'}
    ${4} | ${[38, 45, 38, 80, 85, 92, 99, 106]}        | ${'NO'}
    ${5} | ${[63, 58, 65, 58, 65]}                     | ${'YES'}
    ${6} | ${[117, 124, 48, 53, 48, 43, 54, 49]}       | ${'NO'}
    ${7} | ${[95, 102, 107, 114, 121]}                 | ${'YES'}
    ${8} | ${[72, 77, 82, 75, 70, 75, 68, 75, 68, 75]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPerfectMelody(arr)).toBe(result);
  });
});
