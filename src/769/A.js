﻿module.exports = {
  getEntranceYear: (arr) =>
    arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)],
};
