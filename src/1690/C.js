module.exports = {
  getDurations: (arrayS, arrayF) => {
    let prevF = 0;
    const d = [];
    for (let j = 0; j < arrayS.length; j++) {
      d.push(arrayF[j] - Math.max(arrayS[j], prevF));
      prevF = arrayF[j];
    }
    return d;
  },
};
