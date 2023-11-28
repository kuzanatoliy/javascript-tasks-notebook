module.exports = {
  checkJuicePice: (drinks) => {
    let sum = 0;
    for (let i = 0; i < drinks.length; i++) {
      sum += drinks[i];
    }
    return sum / drinks.length;
  },
};
