/**
 * Sorts an array of objects by the `order` property
 * @see https://github.com/11ty/eleventy/issues/898
 * @param {Array} values - array of objects
 * @returns {Array} - filtered array of objects
 */
module.exports = function sortByOrder(values) {
  let vals = [...values];
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
};
