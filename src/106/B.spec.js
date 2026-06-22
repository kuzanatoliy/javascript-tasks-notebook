const { chooseLaptop } = require('./B');

describe('106B. Choosing Laptop', () => {
  it.each`
    n    | laptops                                                                                                                  | result
    ${1} | ${[[2100, 512, 150, 200], [2000, 2048, 240, 350], [2300, 1024, 200, 320], [2500, 2048, 80, 300], [2000, 512, 180, 150]]} | ${4}
  `('Base test: $n', ({ laptops, result }) => {
    expect(chooseLaptop(laptops)).toBe(result);
  });
});
