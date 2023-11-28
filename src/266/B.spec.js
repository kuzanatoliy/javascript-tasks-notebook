const { changeQueue } = require('./B');

describe('266B. Queue at the School', () => {
  it.each`
    n    | ticks | queue      | result
    ${1} | ${1}  | ${'BGGBG'} | ${'GBGGB'}
    ${2} | ${2}  | ${'BGGBG'} | ${'GGBGB'}
    ${3} | ${1}  | ${'GGGB'}  | ${'GGGB'}
  `('Base test: $n', ({ ticks, queue, result }) => {
    expect(changeQueue(ticks, queue)).toBe(result);
  });
});
