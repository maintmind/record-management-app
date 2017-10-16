import axios from 'axios';

let initialState = {
    user: {},
    asset_id: 0,
    assetName: '',
    assetDescription: '',
    cat_id: 0,
    categoryName: '',
    categoryDescription: '',
    log_id: 0,
    logCompleteDate: null,
    logSubmitDate: null,
    logServiceDesc: '',
    logImage: null,
    logNotes: '',
    logCost: null,
    remind_id: 0,
    reminderStatus: null,
    reminderCreated: null,
    reminderDue: null,
    reminderNotes: ''

}


// ACTION NAMES
const UPDATE_ASSET_ID = "UPDATE_ASSET_ID";
const UPDATE_ASSET_NAME = "UPDATE_ASSET_NAME";
const UPDATE_ASSET_DESCRIPTION = "UPDATE_ASSET_DESCRIPTION";
const UPDATE_CATEGORY_ID = "UPDATE_CATEGORY_ID";
const UPDATE_CATEGORY_NAME = "UPDATE_CATEGORY_NAME";
const UPDATE_CATEGORY_DESCRIPTION = "UPDATE_CATEGORY DESCRIPTION";
const UPDATE_LOG_ID = "UPDATE_LOG_ID";
const UPDATE_LOG_COMPLETE_DATE = "UPDATE_LOG_COMPLETE_DATE";
const UPDATE_LOG_SUBMIT_DATE = "UPDATE_LOG_SUBMIT_DATE";
const UPDATE_LOG_SERVICE_DESC = "UPDATE_LOG_SERVICE_DESC";
const UPDATE_LOG_IMAGE = "UPDATE_LOG_IMAGE";
const UPDATE_LOG_NOTES = "UPDATE_LOG_NOTES";
const UPDATE_REMINDER_ID = "UPDATE_REMINDER_ID";
const UPDATE_REMINDER_STATUS = "UPDATE_REMINDER_STATUS";
const UPDATE_REMINDER_CREATED = "UPDATE_REMINDER_CREATED";
const UPDATE_REMINDER_DUE = "UPDATE_REMINDER_DUE";
const UPDATE_REMINDER_NOTES = "UPDATE_REMINDER_NOTES";

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
        case UPDATE_ASSET_ID:
            return Object.assign({}, state, { assetID: action.payload })
        case UPDATE_ASSET_NAME:
            return Object.assign({}, state, { assetName: action.payload })
        case UPDATE_ASSET_DESCRIPTION:
            return Object.assign({}, state, { assetDescription: action.payload })
        case UPDATE_CATEGORY_ID:
            return Object.assign({}, state, { categoryID: action.payload })
        case UPDATE_CATEGORY_NAME:
            return Object.assign({}, state, { categoryName: action.payload })
        case UPDATE_CATEGORY_DESCRIPTION:
            return Object.assign({}, state, { categoryDescription: action.payload })
        case UPDATE_LOG_ID:
            return Object.assign({}, state, { logID: action.payload })
        case UPDATE_LOG_COMPLETE_DATE:
            return Object.assign({}, state, { logCompleteDate: action.payload })
        case UPDATE_LOG_SUBMIT_DATE:
            return Object.assign({}, state, { logSubmitDate: action.payload })
        case UPDATE_LOG_SERVICE_DESC:
            return Object.assign({}, state, { logServiceDesc: action.payload })
        case UPDATE_LOG_IMAGE:
            return Object.assign({}, state, { logImage: action.payload })
        case UPDATE_LOG_NOTES:
            return Object.assign({}, state, { logNotes: action.payload })
        case UPDATE_REMINDER_ID:
            return Object.assign({}, state, { reminderID: action.payload })
        case UPDATE_REMINDER_STATUS:
            return Object.assign({}, state, { reminderStatus: action.payload })
        case UPDATE_REMINDER_CREATED:
            return Object.assign({}, state, { reminderCreated: action.payload })
        case UPDATE_REMINDER_DUE:
            return Object.assign({}, state, { reminderDue: action.payload })
        case UPDATE_REMINDER_NOTES:
            return Object.assign({}, state, { reminderNotes: action.payload })
        
        default:
            return state
    }
}

// ACTION CREATORS
export function getUser(){
    var userInfo = axios.get('http://localhost:3005/auth/me').then(response => {
        console.log(response)
        return response.data
        })
    return {
        type: GET_USER,
        payload: userInfo
    }
}
export function updateAssetID(num) {
    return {
        type: UPDATE_ASSET_ID,
        payload: num
    }
}
export function updateAssetName(num) {
    return {
        type: UPDATE_ASSET_ID,
        payload: num
    }
}