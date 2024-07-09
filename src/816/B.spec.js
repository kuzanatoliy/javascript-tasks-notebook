const { getCountOfAdmissibleTemperatures } = require('./B');

describe('816B. Karen and Coffee', () => {
  it.each`
    n    | advices                           | questions                                    | k    | result
    ${1} | ${[[91, 94], [92, 97], [97, 99]]} | ${[[92, 94], [93, 97], [95, 96], [90, 100]]} | ${2} | ${[3, 3, 0, 4]}
    ${2} | ${[[1, 1], [200000, 200000]]}     | ${[[90, 100]]}                               | ${1} | ${[0]}
  `('Base test: $n', ({ advices, questions, k, result }) => {
    expect(
      getCountOfAdmissibleTemperatures(advices, questions, k)
    ).toStrictEqual(result);
  });
});
