const { getSteps } = require('./A');

describe('776A. A Serial Killer', () => {
  it.each`
    n    | curr                     | next                                                                                      | result
    ${1} | ${['ross', 'rachel']}    | ${[['ross', 'joey'], ['rachel', 'phoebe'], ['phoebe', 'monica'], ['monica', 'chandler']]} | ${[['ross', 'rachel'], ['joey', 'rachel'], ['joey', 'phoebe'], ['joey', 'monica'], ['joey', 'chandler']]}
    ${2} | ${['icm', 'codeforces']} | ${[['codeforces', 'technex']]}                                                            | ${[['icm', 'codeforces'], ['icm', 'technex']]}
  `('Base test: $n', ({ curr, next, result }) => {
    expect(getSteps(curr, next)).toStrictEqual(result);
  });
});
