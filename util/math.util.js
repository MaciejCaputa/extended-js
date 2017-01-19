/**
 * @file
 * @description
 */
 
/**
 * @param {Number} start
 * @param {Number} end
 * @returns {Number} integer in range [start,end).
 */
Math.randInt = function(start, end) {
  return Math.floor(Math.random() * (start - end) + start);
}

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} GCD of a and b.
 */
Math.gcd = function (a, b) {
  return !b ? a : gcd(b, a % b);
}

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} LCM of a and b.
 */
Math.lcm = function (a, b) {
  return (a * b) / Math.gcd(a, b);
}

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
    '^': Math.pow(a,b)
  }[operation];
}
