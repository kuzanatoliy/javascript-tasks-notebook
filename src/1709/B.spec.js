const { getQuestAmounts } = require('./B');

describe('1709B. Also Try Minecraft', () => {
  it.each`
    n    | arr                        | quests                                              | result
    ${1} | ${[10, 8, 9, 6, 8, 12, 7]} | ${[[1, 2], [1, 7], [4, 6], [7, 1], [3, 5], [4, 2]]} | ${[2, 10, 0, 7, 3, 1]}
  `('Base test: $n', ({ arr, quests, result }) => {
    expect(getQuestAmounts(arr, quests)).toStrictEqual(result);
  });
});
