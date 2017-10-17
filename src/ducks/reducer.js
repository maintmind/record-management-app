
let initialState = {
    testText: null
}


// ACTION NAMES
const TEST_CASE = "TEST_CASE"

// NEW ASSET
// NEW CATEGORY
// NEW LOG
// NEW REMINDER
// TOGGLE COMPONENT
// TOGGLE TAB
// MARK REMINDER COMPLETE


// REDUCER 
export default function dashReducer(state = initialState, action) {
    switch (action.type) {
        case TEST_CASE:
            return {...state, testText: action.payload}

    default:
            return state
    }
}

// ACTION CREATORS
export function testCase(){
    return {
        type: TEST_CASE,
        payload: "Redux works!"
    }
}