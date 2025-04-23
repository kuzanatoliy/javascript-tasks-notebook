const { isItPossibleToTransform } = require('./B');

describe('1883B. Chemistry', () => {
  it.each`
    n     | str                 | k    | result
    ${1}  | ${'a'}              | ${0} | ${'YES'}
    ${2}  | ${'ab'}             | ${0} | ${'NO'}
    ${3}  | ${'ba'}             | ${1} | ${'YES'}
    ${4}  | ${'abb'}            | ${1} | ${'YES'}
    ${5}  | ${'abc'}            | ${2} | ${'YES'}
    ${6}  | ${'bacacd'}         | ${2} | ${'YES'}
    ${7}  | ${'fagbza'}         | ${2} | ${'NO'}
    ${8}  | ${'zwaafa'}         | ${2} | ${'NO'}
    ${9}  | ${'taagaak'}        | ${2} | ${'YES'}
    ${10} | ${'ttrraakkttoorr'} | ${3} | ${'YES'}
    ${11} | ${'debdb'}          | ${3} | ${'YES'}
    ${12} | ${'ecadc'}          | ${4} | ${'YES'}
    ${13} | ${'debca'}          | ${3} | ${'NO'}
    ${14} | ${'abaac'}          | ${3} | ${'YES'}
  `('Base test: $n', ({ str, k, result }) => {
    expect(isItPossibleToTransform(str, k)).toBe(result);
  });
});
