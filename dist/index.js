"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @file
 * @description
 */

/**
 * @returns first {Element} element of an array.
 */
Array.prototype.first = function () {
  return this[0];
};

/**
 * @returns last {Element} of an array.
 */
Array.prototype.last = function () {
  return this.slice(-1)[0];
};

/**
 * @returns {Array} which is shuffled.
 */
Array.prototype.shuffle = function () {
  return this.slice().sort(function () {
    return Math.random() - 0.5;
  });
};

/**
 * @returns random {Element} of the array.
 */
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * @returns {Number} sum of all elements in the array.
 */
Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  });
};
/**
 * @returns {Number} average of all elements in the array.
 */
Array.prototype.average = function () {
  return this.reduce(function (a, b) {
    return a + b;
  }) / this.length;
};

/**
 * @param {Element} n
 * @returns {Number} count of occurence of given param n.
 */
Array.prototype.count = function (n) {
  return [this.filter(function (e) {
    return e === n;
  })].length;
};

/**
 * @returns {Number} minimum from an array.
 */
Array.prototype.min = function () {
  return Math.min.apply(Math, _toConsumableArray(this));
};

/**
 * @returns {Number} maximum from an array
 */
Array.prototype.max = function () {
  return Math.max.apply(Math, _toConsumableArray(this));
};

/**
 * @returns {Array} which is sorted descendingly.
 */
Array.prototype.sortDesc = function () {
  return this.sort(function (a, b) {
    return a - b;
  }).reverse();
};

/**
 * @param {Number} start - lower bound of a range.
 * @param {Number} end - upper bound of a range.
 * @param {Number} step - step of a range.
 * @returns {Array} which which is range [start,end) which consist of all integers divisible by step.
 */
Array.range = function (start) {
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var range = Math.abs(end - start) - 1;
  range /= Math.abs(step);
  range = ~~range;

  var arr = Array(range);

  start = start - end === start ? 0 : start;

  for (var i = 0; i <= range; i++) {
    arr[i] = i === 0 ? start : arr[i - 1] + step;
  }

  return arr;
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} zipped array.
 */
Array.zip = function (arr1, arr2) {
  return (arr1.length > arr2.length ? arr2 : arr1).map(function (e, idx) {
    return [arr1[idx], arr2[idx]];
  });
};
'use strict';

/**
 * @file
 * @description
 */

/**
 * @param {Number} start
 * @param {Number} end
 * @returns {Number} integer in range [start,end).
 */
Math.randInt = function (start, end) {
  if (end === undefined) {
    return Math.floor(Math.random() * start);
  } else {
    return Math.floor(Math.random() * (end - start) + start);
  }
};

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} GCD of a and b.
 */
Math.gcd = function (a, b) {
  return !b ? a : Math.gcd(b, a % b);
};

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} LCM of a and b.
 */
Math.lcm = function (a, b) {
  return a * b / Math.gcd(a, b);
};

/**
 * @param {Number} a
 * @param {String} sign
 * @param {Number} b
 * @returns {Number} Result of binary operation on a and b.
 */
Math.calculate = function (a, operation, b) {
  return {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b,
    '^': Math.pow(a, b)
  }[operation];
};
"use strict";

/**
 * @returns {Number}
 */
Number.prototype.abs = function () {
  if (isNaN(this)) return NaN;
  return ~this + 1;
};

/**
 * @returns {Number}
 */
Number.prototype.floor = function () {
  if (isNaN(this)) return NaN;
  return ~~this;
};

/**
 * @returns {Number}
 */
Number.prototype.ceil = function () {
  if (isNaN(this)) return NaN;
  return ~~this + 1;
};

/**
 * @returns {Number}
 */
Number.prototype.round = function () {
  if (isNaN(this)) return NaN;
  return Math.round(this);
};

/**
 * @returns {Number}
 */
Number.prototype.sign = function () {
  if (isNaN(this)) return NaN;
  return Math.sign(this);
};

/**
 * @returns {Number}
 */
Number.prototype.trunc = function () {
  if (isNaN(this)) return NaN;
  return ~~this;
};
//# sourceMappingURL=index.js.map
