const { itItPossibleToGetZero } = require('./A');

describe('2048A. Kevin and Combination Lock', () => {
  it.each`
    n    | num          | result
    ${1} | ${165}       | ${'YES'}
    ${2} | ${6369}      | ${'YES'}
    ${3} | ${666}       | ${'NO'}
    ${4} | ${114514}    | ${'NO'}
    ${5} | ${133333332} | ${'YES'}
  `('Base test: $n', ({ num, result }) => {
    expect(itItPossibleToGetZero(num)).toBe(result);
  });
});
