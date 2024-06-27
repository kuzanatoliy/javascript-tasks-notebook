module.exports = {
  getNumber: (number) => {
    let next = 9;
    const res = [];
    while (number > next) {
      res.push(next);
      number -= next;
      next--;
    }
    res.push(number);
    return +res.reverse().join('');
  },
};
