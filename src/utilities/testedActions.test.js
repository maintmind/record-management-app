let fns = require("./testedActions")

describe("Reducer tests", function() {
    // KIM 5

    // MARISSA 5

    // SHAWN 5

    //JAMES 5
    test('updateLogName("Oil Change") should return { type: UPDATE_ASSET_ID, payload: "Oil Change" }', function(){
        expect(fns.updateLogName("Oil Change")).toEqual({type: "UPDATE_LOG_NAME", payload: "Oil Change"})
    })

    test('updateLogName("TestThing") should return { type: UPDATE_ASSET_ID, payload: 2 }', function(){
        expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
    })

    test('updateLogName("TestThing") should return { type: UPDATE_ASSET_ID, payload: 2 }', function(){
        expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
    })

    test('updateLogName("TestThing") should return { type: UPDATE_ASSET_ID, payload: 2 }', function(){
        expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
    })

    test('updateLogName("TestThing") should return { type: UPDATE_ASSET_ID, payload: 2 }', function(){
        expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
    })

})
