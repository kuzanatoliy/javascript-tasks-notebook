﻿module.exports = {
  getCountOfSteps: (x1, y1, x2, y2) =>
    Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2)),
};
