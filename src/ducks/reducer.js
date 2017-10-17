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
    reminderNotes: '',
    assetList: [],
    categoryList: [],
    logList: [],
    reminderList: []

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
        case UPDATE_LOG_COST:
            return Object.assign({}, state, { logCost: action.payload })
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
        //AXIOS
        case GET_ALL_ASSETS + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { assetList: action.payload })
        case GET_ALL_CATEGORIES + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { categoryList: action.payload })
        case GET_ALL_LOGS + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { logList: action.payload })
        case GET_ALL_REMINDERS + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderList: action.payload })
        
        
        
        default:
            return state
    }
}

// ACTION CREATORS
export function updateAssetID(asset_id) {
    return {
        type: UPDATE_ASSET_ID,
        payload: asset_id
    }
}
export function updateAssetName() {
    return {
        type: UPDATE_ASSET_NAME,
        payload: assetName
    }
}
export function updateAssetDescription(){
    return {
        type: UPDATE_ASSET_DESCRIPTION,
        payload: assetDescription
    }
}
export function updateCatID(cat_id){
    return {
        type: UPDATE_CATEGORY_ID,
        payload: cat_id
    }
}
export function updateCategoryName(categoryName){
    return {
        type: UPDATE_CATEGORY_NAME,
        payload: categoryName
    }
}
export function updateCategoryDescription(categoryDescription){
    return {
        type: UPDATE_CATEGORY_DESCRIPTION,
        payload: categoryDescription
    }
}
export function updateLogID(log_id) {
    return {
        type: UPDATE_LOG_ID,
        payload: log_id
    }
}
export function updateLogComplete(logCompleteDate) {
    return {
        type: UPDATE_LOG_COMPLETE_DATE,
        payload: logCompleteDate
    }
}
export function updateLogSubmit(logSubmitDate) {
    return {
        type: UPDATE_LOG_SUBMIT_DATE,
        payload: logSubmitDate
    }
}
export function updateLogServiceDesc(logServiceDesc) {
    return {
        type: UPDATE_LOG_SERVICE_DESC,
        payload: logServiceDesc
    }
}
export function updateLogImage(logImage) {
    return {
        type: UPDATE_LOG_IMAGE,
        payload: logImage
    }
}
export function updateLogNotes(logNotes) {
    return {
        type: UPDATE_LOG_NOTES,
        payload: logNotes
    }
}
export function updateLogCost(logCost) {
    return {
        type: UPDATE_LOG_COST,
        payload: logCost
    }
}
export function updateReminderID(remind_id) {
    return {
        type: UPDATE_REMINDER_ID,
        payload: remind_id
    }
}
export function updateReminderStatus(reminderStatus) {
    return {
        type: UPDATE_REMINDER_STATUS,
        payload: reminderStatus
    }
}
export function updateReminderCreated(reminderCreated) {
    return {
        type: UPDATE_REMINDER_CREATED,
        payload: reminderCreated
    }
}
export function updateReminderDue(reminderDue) {
    return {
        type: UPDATE_REMINDER_DUE,
        payload: reminderDue
    }
}
export function updateReminderNotes() {
    return {
        type: UPDATE_REMINDER_NOTES,
        payload: reminderNotes
    }
}

//AXIOS

// export function getUser(){
//     var userInfo = axios.get('http://localhost:3005/auth/me').then(response => {
//         console.log(response)
//         return response.data
//         })
//     return {
//         type: GET_USER,
//         payload: userInfo
//     }
// }
export function getAllAssets() {
    return {
        type: GET_ALL_ASSETS,
        payload: axios.get('http://localhost:3030/api/getAllAssets').then(response => {
            console.log(response)
            return response.data
        })
    }
}

export function getAllCategories() {
    return {
        type: GET_ALL_CATEGORIES,
        payload: axios.get('http://localhost:3030/api/getAllCategories').then(response => {
            console.log(response)
            return response.data
        })
    }
}

export function getAllLogs() {
    return {
        type: GET_ALL_LOGS,
        payload: axios.get('http://localhost:3030/api/getAllLogs').then(response => {
            console.log(response)
            return response.data
        })
    }
}

export function getAllReminders() {
    return {
        type: GET_ALL_REMINDERS,
        payload: axios.get('http://localhost:3030/api/getAllReminders').then(response => {
            console.log(response)
            return response.data
        })
    }
}