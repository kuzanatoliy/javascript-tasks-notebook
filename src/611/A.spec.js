const { getLimit } = require('./A');

describe('611A. New Year and Days', () => {
  it.each`
    n    | request          | result
    ${1} | ${'4 of week'}   | ${52}
    ${2} | ${'30 of month'} | ${11}
    ${3} | ${'29 of month'} | ${12}
  `('Base test: $n', ({ request, result }) => {
    expect(getLimit(request)).toBe(result);
  });
});
