const DEFAULT_DEBOUNCE_DELAY = 500;

module.exports = {
  DEFAULT_DEBOUNCE_DELAY,
  debounce: (callback, delay = DEFAULT_DEBOUNCE_DELAY) => {
    let timeoutId = 0;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  },
};
