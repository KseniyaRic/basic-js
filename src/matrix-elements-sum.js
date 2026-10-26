const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const zeroFound = matrix[0].map(() => false);

  return matrix.reduce((sum, row) => {
    const rowSum = row.reduce((acc, value, j) => {
      if (value === 0) {
        zeroFound[j] = true;
        return acc;
      }
      return zeroFound[j] ? acc : acc + value;
    }, 0);

    return sum + rowSum;
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
