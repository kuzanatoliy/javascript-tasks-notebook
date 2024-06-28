const { isItPossibleToMeetConditions } = require('./A');

describe('1332A. Exercising Walk', () => {
  it.each`
    n    | p               | q                             | result
    ${1} | ${[3, 2, 2, 2]} | ${[0, 0, -2, -2, 2, 2]}       | ${'YES'}
    ${2} | ${[3, 1, 4, 1]} | ${[0, 0, -1, -1, 1, 1]}       | ${'NO'}
    ${3} | ${[1, 1, 1, 1]} | ${[1, 1, 1, 1, 1, 1]}         | ${'NO'}
    ${4} | ${[0, 0, 0, 1]} | ${[0, 0, 0, 0, 0, 1]}         | ${'YES'}
    ${5} | ${[5, 1, 1, 1]} | ${[1, 1, -100, -100, 0, 100]} | ${'YES'}
    ${6} | ${[1, 1, 5, 1]} | ${[1, 1, -100, -100, 100, 0]} | ${'YES'}
  `('Base test: $n', ({ p, q, result }) => {
    expect(isItPossibleToMeetConditions(p, q)).toStrictEqual(result);
  });
});
