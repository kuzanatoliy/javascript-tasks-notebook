const { isAtHome } = require('./A');

describe('765A. Neverending competitions', () => {
  it.each`
    n    | home     | travels                                             | result
    ${1} | ${'SVO'} | ${['SVO->CDG', 'LHR->SVO', 'SVO->LHR', 'CDG->SVO']} | ${'home'}
    ${2} | ${'SVO'} | ${['SVO->HKT', 'HKT->SVO', 'SVO->RAP']}             | ${'contest'}
  `('Base test: $n', ({ home, travels, result }) => {
    expect(isAtHome(home, travels)).toBe(result);
  });
});
