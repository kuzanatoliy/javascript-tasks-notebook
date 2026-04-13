/* eslint-disable max-lines-per-function */
const { debounce } = require('./debounce');

describe('debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const functionSpy = jest.fn();

  it('Should call debounced function only once', () => {
    const func = debounce(functionSpy);

    expect(functionSpy).not.toHaveBeenCalled();
    func();
    func();
    jest.runAllTimers();
    expect(functionSpy).toHaveBeenCalledTimes(1);
  });

  it('Should pass arguments to the debounced function', () => {
    const func = debounce(functionSpy);

    func('arg1', 'arg2', 'arg3');
    jest.runAllTimers();
    expect(functionSpy).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
  });

  it('Should use default delay when not specified', () => {
    const func = debounce(functionSpy);

    func();
    jest.advanceTimersByTime(499);
    expect(functionSpy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(functionSpy).toHaveBeenCalledTimes(1);
  });

  it('Should use custom delay when specified', () => {
    const customDelay = 1000;
    const func = debounce(functionSpy, customDelay);

    func();
    jest.advanceTimersByTime(999);
    expect(functionSpy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(functionSpy).toHaveBeenCalledTimes(1);
  });

  it('Should reset timer on subsequent calls', () => {
    const delay = 1000;
    const func = debounce(functionSpy, delay);

    func();
    jest.advanceTimersByTime(500);
    func();
    jest.advanceTimersByTime(500);
    expect(functionSpy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    expect(functionSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call function with latest arguments only', () => {
    const func = debounce(functionSpy);

    func('first');
    func('second');
    func('third');
    jest.runAllTimers();
    expect(functionSpy).toHaveBeenCalledTimes(1);
    expect(functionSpy).toHaveBeenCalledWith('third');
  });

  it('Should allow multiple executions after delay has passed', () => {
    const delay = 1000;
    const func = debounce(functionSpy, delay);

    func('first');
    jest.advanceTimersByTime(delay);
    expect(functionSpy).toHaveBeenCalledTimes(1);
    func('second');
    jest.advanceTimersByTime(delay);
    expect(functionSpy).toHaveBeenCalledTimes(2);
    expect(functionSpy).toHaveBeenNthCalledWith(1, 'first');
    expect(functionSpy).toHaveBeenNthCalledWith(2, 'second');
  });
});
