module.exports = {
  restorePassword: (pass, codes) => {
    const map = {};
    for (let j = 0; j < codes.length; j++) {
      map[codes[j]] = j.toString();
    }
    return (
      map[pass.slice(0, 10)] +
      map[pass.slice(10, 20)] +
      map[pass.slice(20, 30)] +
      map[pass.slice(30, 40)] +
      map[pass.slice(40, 50)] +
      map[pass.slice(50, 60)] +
      map[pass.slice(60, 70)] +
      map[pass.slice(70, 80)]
    );
  },
};
