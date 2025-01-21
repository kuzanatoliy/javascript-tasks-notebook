const { isItPossibleToMove } = require('./B');

describe('1680B. Robots', () => {
  it.each`
    n    | steps                           | result
    ${1} | ${['ERR']}                      | ${'YES'}
    ${2} | ${['ER', 'RE']}                 | ${'NO'}
    ${3} | ${['ER', 'ER']}                 | ${'YES'}
    ${4} | ${['R']}                        | ${'YES'}
    ${5} | ${['EEE', 'EEE', 'ERR', 'EER']} | ${'YES'}
    ${6} | ${['EEE', 'EER', 'REE']}        | ${'NO'}
  `('Base test: $n', ({ steps, result }) => {
    expect(isItPossibleToMove(steps)).toBe(result);
  });
});
