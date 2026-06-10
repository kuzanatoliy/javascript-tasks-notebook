const { getOperationCount } = require('./B');

describe('2230B. Another Sorting Problem', () => {
  it.each`
    n    | str                   | result
    ${1} | ${'4'}                | ${1}
    ${2} | ${'13'}               | ${0}
    ${3} | ${'3244123'}          | ${4}
    ${4} | ${'24424224242'}      | ${5}
    ${5} | ${'4132423432241231'} | ${9}
  `('Base test: $n', ({ str, result }) => {
    expect(getOperationCount(str)).toStrictEqual(result);
  });
});
