const DEFAULT_THROTTLE_LIMIT = 500;

module.exports = {
  DEFAULT_THROTTLE_LIMIT,
  throttle: (callback, limit = DEFAULT_THROTTLE_LIMIT) => {
    let timerId = 0;
    let lastCallTime = 0;
    return (...args) => {
      clearTimeout(timerId);
      const d = Date.now() - lastCallTime;

      if (d > limit) {
        callback(...args);
        lastCallTime = Date.now();
      } else {
        timerId = setTimeout(() => {
          callback(...args);
        }, limit - d);
      }
    };
  },
};
