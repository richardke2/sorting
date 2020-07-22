describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
    expect(split([])).toEqual([]);
    expect(split([4])).toEqual([4]);
  });
});

describe('Merge', function () {
  it('handles an empty array', function () {
    expect(merge([], [])).toEqual([]);
  });
  it('merges arrays', function () {
    expect(merge([1, 3, 7], [4, 5])).toEqual([1, 3, 4, 5, 7]);
  });
});

// describe('Merge function', function () {
//     // test the merging algorithm
//     it('handles an empty array', function () {
//       expect(mergeSort([])).toEqual([]);
//     });
//     it('handles a 5 number array', function () {
//       expect(mergeSort([1, 3, 4, 5, 2])).toEqual([1, 2, 3, 4, 5]);
//     });
//     it('handles a same number array', function () {
//       expect(mergeSort([1, 5, 5, 3, 1])).toEqual([1, 1, 3, 5, 5]);
//     });
//   });

  describe('Merge function', function () {
    // test the merging algorithm
    it('handles an empty array', function () {
      expect(mergeSort([])).toEqual([]);
    });
    // it('handles a 5 number array', function () {
    //   expect(mergeSort([1, 3, 4, 5, 2])).toEqual([1, 2, 3, 4, 5]);
    // });
    it('handles a same number array', function () {
      const newArr = mergeSort([1,5,3,2,1])
      expect(newArr).toEqual([1, 1, 2, 3, 5]);
    });
  });
