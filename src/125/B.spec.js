const { transformXML } = require('./B');

describe('125A. Cookies', () => {
  it.each`
    n    | map                               | result
    ${1} | ${'<a><b><c></c></b></a>'}        | ${['<a>', '  <b>', '    <c>', '    </c>', '  </b>', '</a>']}
    ${2} | ${'<a><b></b><d><c></c></d></a>'} | ${['<a>', '  <b>', '  </b>', '  <d>', '    <c>', '    </c>', '  </d>', '</a>']}
  `('Base test: $n', ({ map, result }) => {
    expect(transformXML(map)).toStrictEqual(result);
  });
});
