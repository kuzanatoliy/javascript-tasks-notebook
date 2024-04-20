module.exports = {
  transformDate: (date) => {
    const parts = date.split(':');
    const d = parts[0] > '11' && parts[0] < '24' ? 'PM' : 'AM';

    if (parts[0] === '00' || parts[0] === '12') {
      return `12:${parts[1]} ${d}`;
    }

    if (parts[0] > '12') {
      const h = parts[0] - 12;
      return `${h < 10 ? `0${h}` : h}:${parts[1]} ${d}`;
    }

    return `${parts[0]}:${parts[1]} ${d}`;
  },
};
