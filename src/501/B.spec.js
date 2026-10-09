const { transforNames } = require('./B');

describe('501B. Misha and Changing Handles', () => {
  it.each`
    n    | requests                                                                                                                                         | result
    ${1} | ${[['Misha', 'ILoveCodeforces'], ['Vasya', 'Petrov'], ['Petrov', 'VasyaPetrov123'], ['ILoveCodeforces', 'MikeMirzayanov'], ['Petya', 'Ivanov']]} | ${[['Vasya', 'VasyaPetrov123'], ['Misha', 'MikeMirzayanov'], ['Petya', 'Ivanov']]}
  `('Base test: $n', ({ requests, result }) => {
    expect(transforNames(requests)).toStrictEqual(result);
  });
});
