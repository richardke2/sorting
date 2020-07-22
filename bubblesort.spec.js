describe('Bubble Sort', function () {
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });
    it('handles a 5 number array', function () {
        expect(bubbleSort([1,3,4,5,2])).toEqual([1,2,3,4,5]);
    });
    it('handles a same number array', function () {
        expect(bubbleSort([1,5,5,3,1])).toEqual([1,1,3,5,5]);
    });
});