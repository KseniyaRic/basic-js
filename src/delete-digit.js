const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberToString = String(n);
  let max = -Infinity;
  for (let i = 0; i < numberToString.length; i += 1) {
    const newNumber = numberToString.slice(0, i) + numberToString.slice(i + 1);
    const value = Number(newNumber);
    if (value > max) {
      max = value;
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};
