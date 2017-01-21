/**
 * @file math.spec.js
 * @description
 */
describe('Math', function() {

  it('randInt(start, end)', () => {
    expect(Math.randInt(10)).toBeLessThan(10);
    expect(Math.randInt(10)).toBeGreaterThan(-1);

    expect(Math.randInt(2, 9)).toBeLessThan(9);
    expect(Math.randInt(2, 9)).toBeGreaterThan(1);

    expect(Math.randInt(-5, 4)).toBeLessThan(4);
    expect(Math.randInt(-5, 4)).toBeGreaterThan(-6);
  });

  it('gcd(a, b)', () => {
    expect(Math.gcd(4, 8)).toEqual(4);
    expect(Math.gcd(12, 7)).toEqual(1);
    expect(Math.gcd(6, 15)).toEqual(3);
  });

  it('lcm(a, b)', () => {
    expect(Math.lcm(4, 8)).toEqual(8);
    expect(Math.lcm(12, 7)).toEqual(84);
    expect(Math.lcm(6, 15)).toEqual(30);
  });

  it('calculate(a, operation, b)', () => {
    expect(Math.calculate(1, '+', 3)).toEqual(4);
    expect(Math.calculate(11, '*', 11)).toEqual(121);
    expect(Math.calculate(2, '^', 3)).toEqual(8);
  });

});
