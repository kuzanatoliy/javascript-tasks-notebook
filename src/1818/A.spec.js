const { getMaxCountOfPlayers } = require('./A');

describe('1818A. Politics', () => {
  it.each`
    n    | matrix                                      | result
    ${1} | ${['++', '+-']}                             | ${1}
    ${2} | ${['+-+']}                                  | ${1}
    ${3} | ${['+', '-', '-', '+']}                     | ${2}
    ${4} | ${['++++', '+--+', '++-+', '+-++', '++++']} | ${2}
    ${5} | ${['++', '--', '--', '-+']}                 | ${1}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getMaxCountOfPlayers(matrix)).toStrictEqual(result);
  });
});
