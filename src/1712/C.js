module.exports = {
  getMinOperationsCount: (arr) => {
    const n = arr.length;
    const zero = {};
    let curr = {};

    function c(num) {
      if (curr === 0) {
        return;
      }
      curr[num] = true;
    }

    function repl() {
      Object.keys(curr).forEach((key) => {
        zero[key] = true;
      });
      curr = {};
    }

    function val(i) {
      const num = arr[i];
      return zero[num] ? 0 : num;
    }

    c(arr[0]);

    for (let i = 1; i < n; i++) {
      if (val(i) < val(i - 1)) {
        repl();
      }
      c(arr[i]);
    }

    return Object.keys(zero).length;
  },
};
