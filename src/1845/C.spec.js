const { isPasswordExist } = require('./C');

describe('1845B. Come Together', () => {
  it.each`
    n    | map                    | l         | r         | result
    ${1} | ${'88005553535123456'} | ${'50'}   | ${'56'}   | ${'YES'}
    ${2} | ${'123412341234'}      | ${'111'}  | ${'444'}  | ${'NO'}
    ${3} | ${'1234'}              | ${'4321'} | ${'4321'} | ${'YES'}
    ${4} | ${'459'}               | ${'49'}   | ${'59'}   | ${'NO'}
    ${5} | ${'00010'}             | ${'10'}   | ${'11'}   | ${'YES'}
  `('Base test: $n', ({ map, l, r, result }) => {
    expect(isPasswordExist(map, l, r)).toStrictEqual(result);
  });
});
