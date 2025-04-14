module.exports = {
  checkPassword: (password) => {
    if (password.length < 5) {
      return 'Too weak';
    }
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    for (let j = 0; j < password.length; j++) {
      if (password[j] >= 'a' && password[j] <= 'z') {
        c1++;
      } else if (password[j] >= 'A' && password[j] <= 'Z') {
        c2++;
      } else if (password[j] >= '0' && password[j] <= '9') {
        c3++;
      }
    }
    return c1 && c2 && c3 ? 'Correct' : 'Too weak';
  },
};
