const { getMinutes } = require('./D');

describe('676D. Theseus and labyrinth', () => {
  it.each`
    n    | rows | columns | vec               | st        | ed        | result
    ${1} | ${2} | ${2}    | ${['+*', '*U']}   | ${[1, 1]} | ${[2, 2]} | ${-1}
    ${2} | ${2} | ${3}    | ${['<><', '><>']} | ${[1, 1]} | ${[2, 1]} | ${4}
  `('Base test: $n', ({ rows, columns, vec, st, ed, result }) => {
    expect(getMinutes(rows, columns, vec, st, ed)).toBe(result);
  });
});
