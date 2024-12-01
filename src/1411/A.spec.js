const { isBadMessage } = require('./A');

describe('1421A. In-game Chat', () => {
  it.each`
    n    | str                 | result
    ${1} | ${'))'}             | ${'YES'}
    ${2} | ${'gl))hf))))))'}   | ${'NO'}
    ${3} | ${'gege)))))'}      | ${'YES'}
    ${4} | ${')aa))b))))))))'} | ${'YES'}
    ${5} | ${')'}              | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isBadMessage(str)).toBe(result);
  });
});
