const fns = require("./testedActions")

describe("Reducer tests", function () {
    // KIM 5

    // MARISSA 5

    // SHAWN 5
})

describe("James tests", function () {
        //JAMES 5
        // test update Log Name
        test('updateLogName("Oil Change") should return { type: UPDATE_LOG_NAME, payload: "Oil Change" }', function () {
            expect(fns.updateLogName("Oil Change")).toEqual({ type: "UPDATE_LOG_NAME", payload: "Oil Change" })
        })

        let firstUserReminder = [{
            "remind_id": 1
        }]

        // test get all Reminders successfully creates action with payload
        test('getAllReminders(1) returns all reminders for user_id 1', function() {
            expect(fns.getAllReminders(1)[0]).toEqual({type: "GET_ALL_REMINDERS", payload: firstUserReminder })
        })


        // test delete reminder ID
        test('deleteReminder(1, 1) should remove the reminder 1 for user_id 1', done => {
            function callback(reminder, user) {
                fns.deleteReminder(1, 1)
                axios.get.
                    expect(data).toBe("boo")
                done();
            }

            // fns.deleteReminder(callback(1, 1));
        })


        // test that there are no null things in the database

        // test Cloudinary URLs in database
        // test('newCloudinaryUrl(str) should contain cloudinary.com', function(){
        //     expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
        // })




        // test('updateLogName("TestThing") should return { type: UPDATE_ASSET_ID, payload: 2 }', function(){
        //     expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
        // })

        // test('updateLogName("TestThing") should return { type: UPDATE_ASSET_ID, payload: 2 }', function(){
        //     expect(fns.updateLogName("TestThing")).toEqual({type: "UPDATE_LOG_NAME", payload: "TestThing"})
        // })


    })
