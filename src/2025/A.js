module.exports = {
  getCountOfOperations: (str1, str2) => {
    let ind = 0;
    while (str1[ind] && str2[ind] && str1[ind] === str2[ind]) {
      ind++;
    }
    return str1.length + str2.length - ind + (ind > 0 ? 1 : 0);
  },
};
