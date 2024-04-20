const { getCheakerboard } = require('./B');

describe('1950B. Upscaling', () => {
  it.each`
    n    | count | result
    ${1} | ${1}  | ${['##', '##']}
    ${2} | ${2}  | ${['##..', '##..', '..##', '..##']}
    ${3} | ${3}  | ${['##..##', '##..##', '..##..', '..##..', '##..##', '##..##']}
    ${4} | ${4}  | ${['##..##..', '##..##..', '..##..##', '..##..##', '##..##..', '##..##..', '..##..##', '..##..##']}
  `('Base test: $n', ({ count, result }) => {
    expect(getCheakerboard(count)).toStrictEqual(result);
  });
});
