const fns = require("./testedActions")

describe("Reducer tests", function () {
    // KIM 5
    
    // MARISSA 5
    
    // SHAWN 5
    
    test('updateLogDescription("Get the oil changed") should return { type: UPDATE_LOG_DESCRIPTION, payload: "Get the oil changed" }', function(){
        let str = fns.updateLogDescription("str").payload
        expect(typeof str).toEqual('string')
        expect(fns.updateLogDescription("Get the oil changed")).toEqual({type: "UPDATE_LOG_DESCRIPTION", payload: "Get the oil changed"})
    })
    
    test('toggleModal(null) should reset certain properties in state and set modalToggler to null', function(){
        expect(fns.toggleModal(null)).toEqual({type: "TOGGLE_MODAL", payload: null})
    })
    
    test('updateLogCost(500) should return', function(){
        let num = fns.updateLogCost(500).payload
        expect(num).toEqual(parseInt(num))
        expect(fns.updateLogCost(500)).toEqual({type: "UPDATE_LOG_COST", payload: 500})
    })
    
})
    
// JAMES 5
describe("James tests", function () {

    test('updateLogName("Oil Change") should return { type: UPDATE_ASSET_ID, payload: "Oil Change" }', function(){
        expect(fns.updateLogName("Oil Change")).toEqual({type: "UPDATE_LOG_NAME", payload: "Oil Change"})
    })

        // test get all Reminders successfully creates action with payload
        it('getAllReminders(1) returns all reminders for user_id 1', (done) => {
            // expect.assertions(1)

            let firstUserReminder = {
                "payload": {
                    "remind_id": 1,
                    "asset_id": null,
                    "cat_id": 24,
                    "user_id": 1,
                    "status": "open",
                    "date_created": "2017-10-23",
                    "date_due": "2017-10-24",
                    "title": "blub",
                    "description": "blub"
                }
            }
            function callback(res){
            //    console.log(res);
               var result = res.data.filter(item => item.remind_id === 1)
                expect(result[0]).toEqual(firstUserReminder.payload)
                done();
            }
            fns.getAllReminders(1, callback)
        })


        // test delete reminder ID
        // test('deleteReminder(1, 1) should remove the reminder 1 for user_id 1', done => {
        //     function callback(reminder, user) {
        //         fns.deleteReminder(1, 1)
        //         axios.get.
        //             expect(data).toBe("boo")
        //         done();
        //     }

        //     // fns.deleteReminder(callback(1, 1));
        // })


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
