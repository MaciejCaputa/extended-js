/**
 * @file
 * @description
 */

/**
 * @returns first {Element} element of an array.
 */
Array.prototype.first = function() {
  return this[0];
}

/**
 * @returns last {Element} of an array.
 */
Array.prototype.last = function() {
  return this.slice(-1);
}

/**
 * @returns {Array} which is shuffled.
 */
Array.prototype.shuffle = function() {
  return this.sort(() => Math.random() - 0.5)
}

/**
 * @returns random {Element} of the array.
 */
Array.prototype.random = function() {
  return this[Math.floor(Math.random * this.length)];
}

/**
 * @returns {Number} sum of all elements in the array.
 */
Array.prototype.sum = function() {
  return this.reduce((a,b) => a + b);
}
/**
 * @returns {Number} average of all elements in the array.
 */
Array.prototype.average = function() {
  return this.reduce((a,b) => a + b) / this.length;
}

/**
 * @param {Element} n
 * @returns {Number} count of occurence of given param n.
 */
Array.prototype.count = function(n) {
  return [this.filter(e => e === n)].length;
}

/**
 * @returns {Number} minimum from an array.
 */
Array.prototype.min = function() {
  return Math.min(...this);
}

/**
 * @returns {Number} maximum from an array
 */
Array.prototype.max = function() {
  return Math.max(...this);
}

/**
 * @returns {Array} which is sorted descendingly.
 */
Array.prototype.sortDesc = function() {
  return this.sort().reverse();
}

/**
 * @param {Number} start - lower bound of a range.
 * @param {Number} end - upper bound of a range.
 * @param {Number} step - step of a range.
 * @returns {Array} which which is range [start,end) which consist of all integers divisible by step.
 */
Array.range = function(start, end = 0, step = 1) {
  return Array(~~(~(end - start) / step))
            .map((e, idx, arr) => idx === 0 ? 0 : arr[idx - 1] + step);
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} zipped array.
 */
Array.zip = function(arr1, arr2) {
  return (
    arr1.length > arr2.length ? arr2 : arr1
  ).map(
    (e, idx) => [arr1[idx], arr2[idx]]
  );
}
