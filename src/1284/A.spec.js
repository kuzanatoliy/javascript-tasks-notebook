const { getNames } = require('./A');

describe('1284A. New Year and Naming', () => {
  it.each`
    n    | mapS                                                                           | mapT                                                                              | years                                                             | result
    ${1} | ${['sin', 'im', 'gye', 'gap', 'eul', 'byeong', 'jeong', 'mu', 'gi', 'gyeong']} | ${['yu', 'sul', 'hae', 'ja', 'chuk', 'in', 'myo', 'jin', 'sa', 'o', 'mi', 'sin']} | ${[1, 2, 3, 4, 10, 11, 12, 13, 73, 2016, 2017, 2018, 2019, 2020]} | ${['sinyu', 'imsul', 'gyehae', 'gapja', 'gyeongo', 'sinmi', 'imsin', 'gyeyu', 'gyeyu', 'byeongsin', 'jeongyu', 'musul', 'gihae', 'gyeongja']}
  `('Base test: $n', ({ mapS, mapT, years, result }) => {
    expect(getNames(mapS, mapT, years)).toStrictEqual(result);
  });
});
