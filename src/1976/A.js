module.exports = {
  isGoodPassword: (password) => {
    const l = [];
    const n = [];
    for (let j = 0; j < password.length; j++) {
      if (password[j] >= '0' && password[j] <= '9') {
        n.push(password[j]);
        continue;
      }
      l.push(password[j]);
    }
    n.sort();
    l.sort();
    return password === `${n.join('')}${l.join('')}` ? 'YES' : 'NO';
  },
};
