module.exports = {
  getFullTerm: (terms, a, b) => {
    let term = 0;
    a--;
    b--;
    for (let j = a; j < b; j++) {
      term += terms[j];
    }
    return term;
  },
};
