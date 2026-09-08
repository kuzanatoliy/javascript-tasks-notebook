const { isExisted } = require('./B');

describe('1509B. TMT Document', () => {
  it.each`
    n    | str         | result
    ${1} | ${'TMT'}    | ${'YES'}
    ${2} | ${'MTT'}    | ${'NO'}
    ${3} | ${'TMTMTT'} | ${'YES'}
    ${4} | ${'TMTTTT'} | ${'NO'}
    ${5} | ${'TTMMTT'} | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isExisted(str)).toStrictEqual(result);
  });
});
