let fns = require("./testedActions")

describe("Reducer tests", function() {
    // KIM 5
    test('updateReminderDescription("Plumbing Appointment at house") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "Plumbing Appointment at house" }', function(){
        expect(fns.updateReminderDescription("Plumbing Appointment at house")).toEqual({type: "UPDATE_REMINDER_DESCRIPTION", payload: "Plumbing Appointment at house"})
    })

    test('updateReminderName("Irrigation") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "irrigation" }', function() {
        expect(fns.updateReminderDescription("irrigation")).toEqual({type: "UPDATE_REMINDER_DESCRIPTION", payload: "irrigation"})
    })

    test('updateReminderStatus("complete") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "complete" }', function() {
        expect(fns.updateReminderDescription("complete")).toEqual({type: "UPDATE_REMINDER_DESCRIPTION", payload: "complete"})
    })

    test('updateLogDescription("Pool system should be cleaned") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "Pool system should be cleaned" }', function() {
        expect(fns.updateReminderDescription("Pool system should be cleaned")).toEqual({type: "UPDATE_REMINDER_DESCRIPTION", payload: "Pool system should be cleaned"})
    })

    test('updateReminderDescription("boat engine serviced") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "boat engine serviced" }', function() {
        expect(fns.updateReminderDescription("boat engine serviced")).toEqual({type: "UPDATE_REMINDER_DESCRIPTION", payload: "boat engine serviced"})
    })

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
