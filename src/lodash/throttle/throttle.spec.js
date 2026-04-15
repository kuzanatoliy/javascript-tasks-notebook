/* eslint-disable max-lines-per-function */
const { throttle } = require('./throttle');

describe('throttle', () => {
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

  it('Should call trottled function only twice', () => {
    const func = throttle(functionSpy);

    expect(functionSpy).not.toHaveBeenCalled();
    func();
    func();
    func();
    jest.runAllTimers();
    expect(functionSpy).toHaveBeenCalledTimes(2);
  });

  it('Should pass arguments to the trottled function', () => {
    const func = throttle(functionSpy);

    func('arg1', 'arg2', 'arg3');
    jest.runAllTimers();
    expect(functionSpy).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
  });

  it('Should use default limit when not specified', () => {
    const func = throttle(functionSpy);

    func();
    func();
    expect(functionSpy).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(499);
    expect(functionSpy).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1);
    expect(functionSpy).toHaveBeenCalledTimes(2);
  });

  it('Should use custom limit when specified', () => {
    const customlimit = 1000;
    const func = throttle(functionSpy, customlimit);

    func();
    func();
    expect(functionSpy).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(999);
    expect(functionSpy).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1);
    expect(functionSpy).toHaveBeenCalledTimes(2);
  });

  it('Should not reset timer on subsequent calls', () => {
    const limit = 1000;
    const func = throttle(functionSpy, limit);

    func();
    jest.advanceTimersByTime(500);
    expect(functionSpy).toHaveBeenCalledTimes(1);
    func();
    jest.advanceTimersByTime(500);
    expect(functionSpy).toHaveBeenCalledTimes(2);
  });

  it('Should call function with latest arguments only', () => {
    const func = throttle(functionSpy);

    func('first');
    func('second');
    func('third');
    jest.runAllTimers();
    expect(functionSpy).toHaveBeenCalledTimes(2);
    expect(functionSpy).toHaveBeenNthCalledWith(1, 'first');
    expect(functionSpy).toHaveBeenNthCalledWith(2, 'third');
  });

  it('Should allow multiple executions after limit has passed', () => {
    const limit = 1000;
    const func = throttle(functionSpy, limit);

    func('first');
    jest.advanceTimersByTime(limit);
    expect(functionSpy).toHaveBeenCalledTimes(1);
    func('second');
    jest.advanceTimersByTime(limit);
    expect(functionSpy).toHaveBeenCalledTimes(2);
    expect(functionSpy).toHaveBeenNthCalledWith(1, 'first');
    expect(functionSpy).toHaveBeenNthCalledWith(2, 'second');
  });
});
