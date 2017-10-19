let mathFuncs = require('./testfile');

describe("tests for sum/multiply", () =>{
    test("sum should return num1 + num2", () => {
        expect(mathFuncs.sum(2,3)).toBe(5)
    })

    test("multiply should return num1 * num2", () => {
        expect(mathFuncs.multiply(2,3)).toEqual(6)
    })
})