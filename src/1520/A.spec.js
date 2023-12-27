const { checkSuspicious } = require('./A');

describe('1520A. Do Not Be Distracted!', () => {
  it.each`
    n    | numbers          | result
    ${1} | ${'ABA'}         | ${'NO'}
    ${2} | ${'DDBBCCCBBEZ'} | ${'NO'}
    ${3} | ${'FFGZZZY'}     | ${'YES'}
    ${4} | ${'Z'}           | ${'YES'}
    ${5} | ${'AB'}          | ${'YES'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(checkSuspicious(numbers)).toBe(result);
  });
});
