/**
 * @file
 * @description
 */
describe('Array.prototype', function() {
  var arr;

  beforeEach(() => {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });

  it('first()', () => {
    expect(arr.first()).toEqual(1);
  });

  it('last()', () => {
    expect(arr.last()).toEqual(10);
  });

  it('shuffle()', () => {
    expect(arr.shuffle()).toBeTruthy();
    expect(arr.shuffle()).not.toEqual(arr);
  });

  it('random()', () => {
    expect(arr.random()).toBeTruthy();
    expect(arr.random()).not.toEqual(arr);
  });

  it('sum()', () => {
    expect(arr.sum()).toEqual(55);
  });

  it('average()', () => {
    expect(arr.average()).toEqual(5.5);
  });

  it('count()', () => {
    expect(arr.count(2)).toEqual(1);
  });

  it('min()', () => {
    expect(arr.min()).toEqual(1);
  });

  it('max()', () => {
    expect(arr.max()).toEqual(10);
  });

  it('sortDesc()', () => {
    expect(arr.sortDesc()).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

});


/**
 *
 */
describe('Array', () => {

  it('range()', () => {
    expect(Array.range(4)).toEqual([0, 1, 2, 3]);
    expect(Array.range(10,18)).toEqual([10, 11, 12, 13, 14, 15, 16, 17]);
    expect(Array.range(4, 10, 2)).toEqual([4, 6, 8]);
    expect(Array.range(0, -10, -2)).toEqual([0, -2, -4, -6, -8]);
  });

  it('zip()', () => {
    expect(Array.zip(arr1, arr2)).toEqual([0, 1, 2, 3]);
  });

});
