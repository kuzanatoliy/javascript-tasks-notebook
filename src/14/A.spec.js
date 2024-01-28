const { getRectangle } = require('./A');

describe('14A. Letter', () => {
  it.each`
    n    | password                                                              | result
    ${1} | ${['.......', '..***..', '..*....', '..***..', '..*....', '..***..']} | ${['***', '*..', '***', '*..', '***']}
    ${2} | ${['***', '*.*', '***']}                                              | ${['***', '*.*', '***']}
  `('Base test: $n', ({ password, result }) => {
    expect(getRectangle(password)).toStrictEqual(result);
  });
});
