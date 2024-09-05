const { getMinSubString } = require('./B');

describe('1354B. Ternary String', () => {
  it.each`
    n    | str                 | result
    ${1} | ${'123'}            | ${3}
    ${2} | ${'12222133333332'} | ${3}
    ${3} | ${'112233'}         | ${4}
    ${4} | ${'332211'}         | ${4}
    ${5} | ${'12121212'}       | ${0}
    ${6} | ${'333333'}         | ${0}
    ${7} | ${'31121'}          | ${4}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinSubString(str)).toBe(result);
  });
});
