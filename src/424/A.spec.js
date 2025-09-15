const { transformString } = require('./A');

describe('424A. Squats', () => {
  it.each`
    n    | str         | result
    ${1} | ${'xxXx'}   | ${[1, 'XxXx']}
    ${2} | ${'XX'}     | ${[1, 'xX']}
    ${3} | ${'xXXxXx'} | ${[0, 'xXXxXx']}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toStrictEqual(result);
  });
});
