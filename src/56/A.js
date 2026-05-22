const ALCO = [
  'ABSINTH',
  'BEER',
  'BRANDY',
  'CHAMPAGNE',
  'GIN',
  'RUM',
  'SAKE',
  'TEQUILA',
  'VODKA',
  'WHISKEY',
  'WINE',
];

module.exports = {
  getCountOfChecks: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      const num = parseInt(arr[j]);
      count += (Number.isNaN(num) && ALCO.indexOf(arr[j]) > -1) || num < 18;
    }
    return count;
  },
};
