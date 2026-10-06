module.exports = {
  getOperationsCount: (bstr) => {
    let totalZeros = 0;
    for (let j = 0; j < bstr.length; j++) {
      totalZeros += bstr[j] === '0';
    }
    if (bstr[0] === '1') {
      return totalZeros;
    } else {
      let onesPrefix = 0;
      let zerosPrefix = 0;
      let best = totalZeros;
      for (let k = 1; k <= bstr.length; k++) {
        if (bstr[k - 1] === '1') {
          onesPrefix++;
        } else {
          zerosPrefix++;
        }
        const cost = onesPrefix + (totalZeros - zerosPrefix);
        if (cost < best) {
          best = cost;
        }
      }
      return best;
    }
  },
};
