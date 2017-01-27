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
  if (end === undefined) {
    return Math.floor(Math.random() * start);
  } else {
    return Math.floor(Math.random() * (end - start) + start);
  }
}

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} GCD of a and b.
 */
Math.gcd = function (a, b) {
  return !b ? a : Math.gcd(b, a % b);
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
 * @param {Number} number
 * @returns {Boolean} determining if the number is an integer.
 */
Math.isInteger = function(number) {
  return number - Math.floor(number) === 0;
}

/**
 * @param {Number} number
 * @returns {Boolean} determining if the number is an integer.
 */
Math.isDecimal = function(number) {
  return number - Math.floor(number) != 0;
}

/**
 * @param {String} operation
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Result of binary operation on a and b given in a prefix notation.  ``````
 */
Math.calculate = function(operation, a, b) {
  return {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b,
    '^': Math.pow(a,b),
    'r': Math.pow(a,1/b),
    'l': Math.log(a) / Math.log(b)
  }[operation];
}

/**
 * Computes LCM - Least Common Multiple - of two numbers.
 * @param {Number} num
 * @returns {Array|Number} - LCM of a and b.
 */
Math.primeFactorization = function(num) {

  // Asserting if num is not a number.
  if ( isNaN( num ) ){
    return [];
  }

  var
    root = Math.sqrt(num),
    // Getting unnamed paremeter from recursive calls.
    result = arguments[1] || [],
    x = 2;

  if(num % x){//if not divisible by 2
   x = 3;//assign first odd
   while((num % x) && ((x = x + 2) < root)){}//iterate odds
  }
  //if no factor found then num is prime
  x = (x <= root) ? x : num;
  result.push(x);//push latest prime factor

  //if num isn't prime factor make recursive call
  return (x === num) ? result : primeFactorization(num/x, result) ;
};
