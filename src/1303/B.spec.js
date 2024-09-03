const { getCountOfDays } = require('./B');

describe('1303B. National Project', () => {
  it.each`
    n    | nn          | g      | b           | result
    ${1} | ${5n}       | ${1n}  | ${1n}       | ${5n}
    ${2} | ${8n}       | ${10n} | ${10n}      | ${8n}
    ${3} | ${1000000n} | ${1n}  | ${1000000n} | ${499999500000n}
  `('Base test: $n', ({ nn, g, b, result }) => {
    expect(getCountOfDays(nn, g, b)).toBe(result);
  });
});
