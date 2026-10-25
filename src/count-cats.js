const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let foundCat = 0;
  for (let i = 0; i < matrix.length; i +=1) {
    for (let j = 0; j < matrix[i].length;  j += 1) {
let position = matrix[i][j];
if (position === '^^') {
  foundCat += 1
}
    }
  }
return foundCat;
}


module.exports = {
  countCats
};
