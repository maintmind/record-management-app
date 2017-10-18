import axios from 'axios';

let initialState = {
    user: {user_id: 1},
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
    reminderList: [],
    reminderListOverdue: [],
    reminderListUpcoming: [],
    //VIEWS
    assetView: 0,
    catView: 0,
    modalToggler: 'null'
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
const UPDATE_LOG_COST = "UPDATE_LOG_COST";
const UPDATE_REMINDER_ID = "UPDATE_REMINDER_ID";
const UPDATE_REMINDER_STATUS = "UPDATE_REMINDER_STATUS";
const UPDATE_REMINDER_CREATED = "UPDATE_REMINDER_CREATED";
const UPDATE_REMINDER_DUE = "UPDATE_REMINDER_DUE";
const UPDATE_REMINDER_NOTES = "UPDATE_REMINDER_NOTES";
const GET_ALL_ASSETS = "GET_ALL_ASSETS";
const ADD_ASSET = "ADD_ASSET";
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
const ADD_CATEGORY = "ADD_CATEGORY";
const GET_ALL_LOGS = "GET_ALL_LOGS";
const ADD_LOG = "ADD_LOG";
const GET_ALL_REMINDERS = "GET_ALL_REMINDERS";
const ADD_REMINDER = "ADD_REMINDER";
const GET_REMINDERS_OVERDUE = "REMINDER OVERDUE";
const GET_REMINDERS_COMING_UP = "GET_REMINDERS_COMING_UP";
const SET_REMINDER_STATUS_TO_CLOSED = "SET_REMINDER_STATUS_TO_CLOSED";
const SET_REMINDER_STATUS_TO_OPEN = "SET_REMINDER_STATUS_TO_OPEN";
const TOGGLE_MODAL = "TOGGLE_MODAL";
const ASSET_ROTATE = "ASSET_ROTATE";
const CAT_DISP = "CAT_DISP";

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
        case GET_ALL_ASSETS + "_FULFILLED":
            return Object.assign({}, state, { assetList: action.payload })
        case ADD_ASSET + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { assetList: action.payload })
        case GET_ALL_CATEGORIES + "_FULFILLED":
            return Object.assign({}, state, { categoryList: action.payload })
        case ADD_CATEGORY + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { categoryList: action.payload })
        case GET_ALL_LOGS + "_FULFILLED":
            return Object.assign({}, state, { logList: action.payload })
        case ADD_LOG + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { logList: action.payload })
        case GET_ALL_REMINDERS + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderList: action.payload })
        case ADD_REMINDER + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderList: action.payload })
        case GET_REMINDERS_OVERDUE + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderListOverdue: action.payload })
        case GET_REMINDERS_COMING_UP + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderListUpcoming: action.payload })
        case SET_REMINDER_STATUS_TO_CLOSED + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderList: action.payload })
        case SET_REMINDER_STATUS_TO_OPEN + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { reminderList: action.payload })
        case TOGGLE_MODAL:
            return Object.assign({}, state, { modalToggler: action.payload })
        case ASSET_ROTATE:
            return Object.assign({}, state, {assetView: action.payload})
        case CAT_DISP:
            return Object.assign({}, state, {catView: action.payload})

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
export function updateAssetName(assetName) {
    return {
        type: UPDATE_ASSET_NAME,
        payload: assetName
    }
}
export function updateAssetDescription(assetDescription){
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
export function updateReminderNotes(reminderNotes) {
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

//ASSETS//
export function getAllAssets(num) {
    return {
        type: GET_ALL_ASSETS,
        payload: axios.get(`/api/assets/get_all/${num}`).then(response => {
            return response.data
        })
    }
}

export function addAsset() {
    return {
        type: ADD_ASSET,
        payload: axios.post(`/api/assets/add`).then(response => {
            console.log(response)
            return response.data
        })
    }
}
//CATEGORIES//
export function getAllCategories(num) {
    return {
        type: GET_ALL_CATEGORIES,
        payload: axios.get(`/api/categories/get_all/${num}`).then(response => {
            return response.data
        })
    }
}

export function addCategory() {
    return {
        type: ADD_CATEGORY,
        payload: axios.post(`/api/assets/add`).then(response => {
            console.log(response)
            return response.data
        })
    }
}
//LOGS//
export function getAllLogs(num) {
    return {
        type: GET_ALL_LOGS,
        payload: axios.get(`/api/logs/get_all/${num}`).then(response => {
            return response.data
        })
    }
}

export function addLog(num) {
    return {
        type: ADD_LOG,
        payload: axios.post(`/api/logs/add/${num}`).then(response => {
            console.log(response)
            return response.data
        })
    }
}
// REMINDERS//

// export function getAllReminders(num) {
//     return {
//         type: GET_ALL_REMINDERS,
//         payload: axios.get(`/api/reminders/get_all/${num}`).then(response => {
//             console.log(response)
//             return response.data
//         })
//     }
// }

export function addReminder(num) {
    return {
        type: ADD_REMINDER,
        payload: axios.post(`/api/reminders/add/${num}`).then(response => {
            console.log(response)
            return response.data
        })
    }
}

export function getRemindersOverdue(num) {
    return {
        type: GET_REMINDERS_OVERDUE,
        payload: axios.get(`/api/reminders/overdue/${num}`).then(response => {
            console.log("response", response.data)
            return response.data
        })
    }
}

export function getRemindersComingUp(num) {
    return {
        type: GET_REMINDERS_COMING_UP,
        payload: axios.get(`/api/reminders/coming-in/${num}`).then(response => {
            console.log(response.data)
            return response.data
        })
    }
}

export function setReminderStatusToClosed(num) {
    return {
        type: SET_REMINDER_STATUS_TO_CLOSED,
        payload: axios.put(`/api/reminders/close/${num}`).then(response => {
            console.log(response)
            return response.data
        })
    }
}

export function setReminderStatusToOpen(num) {
    return {
        type: SET_REMINDER_STATUS_TO_OPEN,
        payload: axios.put(`/api/reminders/open/${num}`).then(response => {
            console.log(response)
            return response.data
        })
    }
}

//VIEWS

export function assetRotate(num) {
    return {
        type: ASSET_ROTATE,
        payload: num
    }
}

export function catDisp(num) {
    return {
        type: CAT_DISP,
        payload: num
    }
}

export function toggleModal(str) {
    return {
        type: TOGGLE_MODAL,
        payload: str
    }
}
