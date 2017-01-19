
/**
 * @returns {Number}
 */
Number.prototype.abs = function() {
  if (isNaN(this)) return NaN;
  return ~this + 1;
}

/**
 * @returns {Number}
 */
Number.prototype.floor = function() {
  if (isNaN(this)) return NaN;
  return ~~this;
}

/**
 * @returns {Number}
 */
Number.prototype.ceil = function() {
  if (isNaN(this)) return NaN;
  return ~~this + 1;
}

/**
 * @returns {Number}
 */
Number.prototype.round = function() {
  if (isNaN(this)) return NaN;
  return
}

/**
 * @returns {Number}
 */
Number.prototype.sign = function() {
  if (isNaN(this)) return NaN;
  return
}

/**
 * @returns {Number}
 */
Number.prototype.trunc = function() {
  if (isNaN(this)) return NaN;
  return ~~this;
}
