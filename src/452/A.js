const POKEMONS = [
  'vaporeon',
  'jolteon',
  'flareon',
  'espeon',
  'umbreon',
  'leafeon',
  'glaceon',
  'sylveon',
];

module.exports = {
  getPokemon: (map) => {
    let temp = '';
    for (let j = 0; j < map.length; j++) {
      temp += map[j] === '.' ? '[a-z]' : map[j];
    }
    // eslint-disable-next-line require-unicode-regexp
    const reg = new RegExp(temp);
    for (let jj = 0; jj < POKEMONS.length; jj++) {
      if (reg.test(POKEMONS[jj]) && POKEMONS[jj].length === map.length) {
        return POKEMONS[jj];
      }
    }
    return -1;
  },
};
