/**
 * @file number.spec.js
 * @description
 */
describe('Number', function() {
  let
    a = -8.65,
    b = -12.3,
    c = 14.3,
    d = 12.68;

  it('abs()', () => {
    expect(a.abs()).toEqual(8.65);
    expect(b.abs()).toEqual(12.3);
    expect(c.abs()).toEqual(14.3);
    expect(d.abs()).toEqual(12.68);
  });

  it('trunc()', () => {
    expect(a.trunc()).toEqual(-8);
    expect(b.trunc()).toEqual(-12);
    expect(c.trunc()).toEqual(14);
    expect(d.trunc()).toEqual(12);
  });

  it('floor()', () => {
    expect(a.floor()).toEqual(-9);
    expect(b.floor()).toEqual(-13);
    expect(c.floor()).toEqual(14);
    expect(d.floor()).toEqual(12);
  });

  it('ceil()', () => {
    expect(a.ceil()).toEqual(-8);
    expect(b.ceil()).toEqual(-12);
    expect(c.ceil()).toEqual(15);
    expect(d.ceil()).toEqual(13);
  });

  it('round()', () => {
    expect(a.round()).toEqual(-9);
    expect(b.round()).toEqual(-12);
    expect(c.round()).toEqual(14);
    expect(d.round()).toEqual(13);
  });

  it('sign()', () => {
    expect(a.sign()).toEqual(-1);
    expect(b.sign()).toEqual(-1);
    expect(c.sign()).toEqual(1);
    expect(d.sign()).toEqual(1);
  });

});
