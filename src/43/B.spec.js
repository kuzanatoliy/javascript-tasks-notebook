const { isItPossibleToBuild } = require('./B');

describe('43B. Letter', () => {
  it.each`
    n    | s1                                                                                | s2                         | result
    ${1} | ${'Instead of dogging Your footsteps it disappears but you dont notice anything'} | ${'where is your dog'}     | ${'NO'}
    ${2} | ${'Instead of dogging Your footsteps it disappears but you dont notice anything'} | ${'Your dog is upstears'}  | ${'YES'}
    ${3} | ${'Instead of dogging your footsteps it disappears but you dont notice anything'} | ${'Your dog is upstears'}  | ${'NO'}
    ${4} | ${'abcdefg hijk'}                                                                 | ${'k j i h g f e d c b a'} | ${'YES'}
  `('Base test: $n', ({ s1, s2, result }) => {
    expect(isItPossibleToBuild(s1, s2)).toBe(result);
  });
});
