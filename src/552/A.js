module.exports = {
  getValue: (boxes) =>
    boxes.reduce(
      (sum, box) =>
        sum + (Math.abs(box[0] - box[2]) + 1) * (Math.abs(box[1] - box[3]) + 1),
      0
    ),
};
