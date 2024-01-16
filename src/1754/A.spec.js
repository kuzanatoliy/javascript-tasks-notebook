const { checkIfDialogMayCorrespond } = require('./A');

describe('1754A. Technical Support', () => {
  it.each`
    n    | string              | result
    ${1} | ${'QQAA'}           | ${'Yes'}
    ${2} | ${'QQAQ'}           | ${'No'}
    ${3} | ${'QAA'}            | ${'Yes'}
    ${4} | ${'Q'}              | ${'No'}
    ${5} | ${'QAQQAQAAQQQAAA'} | ${'Yes'}
  `('Base test: $n', ({ string, result }) => {
    expect(checkIfDialogMayCorrespond(string)).toBe(result);
  });
});
