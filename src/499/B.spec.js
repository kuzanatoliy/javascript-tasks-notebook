const { transformMessage } = require('./B');

describe('499B. Lecture', () => {
  it.each`
    n    | words                                                           | message                                | result
    ${1} | ${['codeforces codesecrof', 'contest round', 'letter message']} | ${'codeforces contest letter contest'} | ${'codeforces round letter round'}
    ${2} | ${['joll wuqrd', 'euzf un', 'hbnyiyc rsoqqveh']}                | ${'hbnyiyc joll joll euzf joll'}       | ${'hbnyiyc joll joll un joll'}
  `('Base test: $n', ({ words, message, result }) => {
    expect(transformMessage(words, message)).toBe(result);
  });
});
