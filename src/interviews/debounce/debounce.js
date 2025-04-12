module.exports = {
  debounce: (callback, delay) => {
    let timeoutId = 0;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  },
};
