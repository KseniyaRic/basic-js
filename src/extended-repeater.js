const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const repeat = (text, count, separation) =>
    new Array(count).fill(text).join(separation);

  const additionPart =
    addition === undefined
      ? ""
      : repeat(String(addition), additionRepeatTimes, additionSeparator);

  return repeat(String(str) + additionPart, repeatTimes, separator);
}

module.exports = {
  repeater,
};
