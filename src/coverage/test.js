let mathFuncs = require('./testFile')
let asset = require('../components/Assets/Assets')
let inputForm = require('../components/UserInputForm/UserInputForm')

describe("tests for reducer", () => {
    test("updateAssetName should update assetName", () => {
        expect(inputForm.updateAssetDescription('Fixed Leak')).toEqual('Fixed Leak')
    })

})