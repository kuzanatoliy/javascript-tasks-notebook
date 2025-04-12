const { debounce } = require('./debounce');

describe('debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('Should run debounce function', () => {
    const funcSpy = jest.fn((str) => `Run test: ${str}`);
    const debouncedFunc = debounce(funcSpy, 1000);
    debouncedFunc();
    expect(funcSpy).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(funcSpy).toHaveBeenCalled();
  });

  it('Should run debounce function only once', () => {
    const funcSpy = jest.fn((str) => `Run test: ${str}`);
    const debouncedFunc = debounce(funcSpy, 1000);
    debouncedFunc();
    expect(funcSpy).not.toHaveBeenCalled();
    debouncedFunc();
    expect(funcSpy).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(funcSpy).toHaveBeenCalledTimes(1);
  });
});
