const { isItPossibleToExecute } = require('./C');

describe('2200B. Deletion Sort', () => {
  it.each`
    n    | map               | result
    ${1} | ${'a'}            | ${'NO'}
    ${2} | ${'llmllm'}       | ${'YES'}
    ${3} | ${'uwuuwu'}       | ${'YES'}
    ${4} | ${'byebye'}       | ${'NO'}
    ${5} | ${'oooioi'}       | ${'NO'}
    ${6} | ${'siixxsevvenn'} | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToExecute(map)).toBe(result);
  });
});
