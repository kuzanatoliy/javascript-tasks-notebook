const { printSnake } = require('./A');

describe('510A. Fox And Snake', () => {
  it.each`
    n    | rows | columns | result
    ${1} | ${3} | ${3}    | ${['###', '..#', '###']}
    ${2} | ${3} | ${4}    | ${['####', '...#', '####']}
    ${3} | ${5} | ${3}    | ${['###', '..#', '###', '#..', '###']}
    ${4} | ${9} | ${9}    | ${['#########', '........#', '#########', '#........', '#########', '........#', '#########', '#........', '#########']}
  `('Base test: $n', ({ rows, columns, result }) => {
    expect(printSnake(rows, columns)).toStrictEqual(result);
  });
});
