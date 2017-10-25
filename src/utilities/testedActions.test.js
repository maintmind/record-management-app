const fns = require("./testedActions")

describe("Reducer tests", function () {
    // KIM 5
    test('updateReminderDescription("Plumbing Appointment at house") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "Plumbing Appointment at house" }', function () {
        expect(fns.updateReminderDescription("Plumbing Appointment at house")).toEqual({ type: "UPDATE_REMINDER_DESCRIPTION", payload: "Plumbing Appointment at house" })
    })

    test('updateReminderName("Irrigation") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "irrigation" }', function () {
        expect(fns.updateReminderDescription("irrigation")).toEqual({ type: "UPDATE_REMINDER_DESCRIPTION", payload: "irrigation" })
    })

    test('updateReminderStatus("complete") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "complete" }', function () {
        expect(fns.updateReminderDescription("complete")).toEqual({ type: "UPDATE_REMINDER_DESCRIPTION", payload: "complete" })
    })

    test('updateLogDescription("Pool system should be cleaned") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "Pool system should be cleaned" }', function () {
        expect(fns.updateReminderDescription("Pool system should be cleaned")).toEqual({ type: "UPDATE_REMINDER_DESCRIPTION", payload: "Pool system should be cleaned" })
    })

    test('updateReminderDescription("boat engine serviced") should return { type: UPDATE_REMINDER_DESCRIPTION, payload: "boat engine serviced" }', function () {
        expect(fns.updateReminderDescription("boat engine serviced")).toEqual({ type: "UPDATE_REMINDER_DESCRIPTION", payload: "boat engine serviced" })
    })

    // MARISSA 5

    // SHAWN 5

    test('updateLogDescription("Get the oil changed") should return { type: UPDATE_LOG_DESCRIPTION, payload: "Get the oil changed" }', function () {
        let str = fns.updateLogDescription("str").payload
        expect(typeof str).toEqual('string')
        expect(fns.updateLogDescription("Get the oil changed")).toEqual({ type: "UPDATE_LOG_DESCRIPTION", payload: "Get the oil changed" })
    })

    test('toggleModal(null) should reset certain properties in state and set modalToggler to null', function () {
        expect(fns.toggleModal(null)).toEqual({ type: "TOGGLE_MODAL", payload: null })
    })

    test('updateLogCost(500) should return', function () {
        let num = fns.updateLogCost(500).payload
        expect(num).toEqual(parseInt(num))
        expect(fns.updateLogCost(500)).toEqual({ type: "UPDATE_LOG_COST", payload: 500 })
    })

})

// JAMES 5
describe("James tests", function () {

    describe("Action Creator Tests", function () {

        test('UPDATE_ASSET_ID: updateLogName("Oil Change") should return { type: UPDATE_ASSET_ID, payload: "Oil Change" }', function () {
            expect(fns.updateLogName("Oil Change")).toEqual({ type: "UPDATE_LOG_NAME", payload: "Oil Change" })
        })

        test('UPDATE_ASSET_ID: updateLogName("Oil Change") should return { type: UPDATE_ASSET_ID, payload: "Oil Change" }', function () {
            expect(fns.updateLogName("Oil Change")).toEqual({ type: "UPDATE_LOG_NAME", payload: "Oil Change" })
        })

        test('UPDATE_ASSET_ID: updateLogName("Oil Change") should return { type: UPDATE_ASSET_ID, payload: "Oil Change" }', function () {
            expect(fns.updateLogName("Oil Change")).toEqual({ type: "UPDATE_LOG_NAME", payload: "Oil Change" })
        })
    })

    describe("Async - correct values on state after calls", function () {

        let firstUserReminder = {
            "payload": {
                "remind_id": 1,
                "asset_id": null,
                "cat_id": 24,
                "user_id": 1,
                "status": "closed",
                "date_created": "2017-10-23T06:00:00.000Z",
                "date_due": "2017-10-24T06:00:00.000Z",
                "title": "blub",
                "description": "blub"
            }
        }

        // test get all Reminders successfully creates action with payload
        it('getAllReminders(1) returns all 12 reminders for user_id 1', (done) => {
            
            function callback(res) {
                var length = res.data.length
                expect(length).toEqual(12)
                done();
            }
            fns.getAllReminders(1, callback)
        })

        it('Reminders data returns in formats and values as expected (testing remind_id 1 for user_id 1', (done) => {
            
            function callback(res) {
                var result = res.data.filter(item => item.remind_id === 1)
                expect(result[0]).toEqual(firstUserReminder.payload)
                done();
            }
            fns.getAllReminders(1, callback)
        })


    })
})
