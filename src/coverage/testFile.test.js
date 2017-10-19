let mathFuncs = require ('./testFile.js');
let catFuncs = require ('../components/Categories/Categories.js');

describe ('tests for sum and multiply', () => {
    test('sum of 2 and 3should return 5', () => {
        expect(mathFuncs.sum(2, 3)).toBe(5)
    })
    test('multiply 2 and 3 should return 6', () => {
        expect(mathFuncs.multiply(2,3)).toEqual(6)
    })
})

describe ('tests for categories component', () => {
    test('toggleCatDisp 1 should toggle catView to 1', () => {
        expect(catFuncs.toggleCatDisp(1)).toEqual(1)
    })
})