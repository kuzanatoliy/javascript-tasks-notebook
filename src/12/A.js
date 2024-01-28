module.exports = {
  isPasswordSymmetric: (password) =>
    password[0] === password[8] &&
    password[1] === password[7] &&
    password[2] === password[6] &&
    password[3] === password[5]
      ? 'YES'
      : 'NO',
};
