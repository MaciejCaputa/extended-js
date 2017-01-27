
/**
 * @returns {Number}
 */
Number.prototype.abs = function() {
  if (isNaN(this)) return NaN;
  console.log((this ^ (this >> 31)) - (this >> 31));
  return this >= 0 ? this : -this;
}

/**
 * @returns {Number}
 */
Number.prototype.trunc = function() {
  if (isNaN(this)) return NaN;
  return ~~this;
}

/**
 * @returns {Number}
 */
Number.prototype.floor = function() {
  if (isNaN(this)) return NaN;
  return this >= 0 ? ~~this : ~~this - 1;
}

/**
 * @returns {Number}
 */
Number.prototype.ceil = function() {
  if (isNaN(this)) return NaN;
  return this >= 0 ? ~~this + 1: ~~this;
}

/**
 * @returns {Number}
 */
Number.prototype.round = function() {
  if (isNaN(this)) return NaN;
  return this >= 0 ? ~~(this + 0.5) : ~~(this - 0.5);
}

/**
 * @returns {Number}
 */
Number.prototype.sign = function() {
  if (isNaN(this)) return NaN;
  return Math.sign(this);
}

/**
 * @param {Number} number
 * @returns {Boolean} determining if the number is an integer.
 */
Number.isInteger = function() {
  return this - Math.floor(this) === 0;
}

/**
 * @param {Number} number
 * @returns {Boolean} determining if the number is an integer.
 */
Number.isDecimal = function() {
  return this - Math.floor(this) != 0;
}
