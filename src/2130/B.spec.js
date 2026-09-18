const { isItPossibleToReorder } = require('./B');

describe('2130B. Pathless', () => {
  it.each`
    n    | s       | arr                | result
    ${1} | ${2}    | ${[0, 1, 2]}       | ${[0, 1, 2]}
    ${2} | ${3}    | ${[0, 1, 2]}       | ${[-1]}
    ${3} | ${6}    | ${[0, 1, 2]}       | ${[-1]}
    ${4} | ${4}    | ${[0, 1, 2]}       | ${[0, 2, 1]}
    ${5} | ${10}   | ${[0, 1, 2]}       | ${[-1]}
    ${6} | ${1000} | ${[2, 0, 1, 1, 2]} | ${[-1]}
  `('Base test: $n', ({ s, arr, result }) => {
    expect(isItPossibleToReorder(s, arr)).toStrictEqual(result);
  });
});
