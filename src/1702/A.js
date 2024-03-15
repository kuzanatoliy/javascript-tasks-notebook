const TEMPLATE = '1000000000';

module.exports = {
  getRoundedPrice: (number) => {
    const temp = `${number}`;
    return +temp - +TEMPLATE.slice(0, temp.length);
  },
};
