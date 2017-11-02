import axios from 'axios';
var fns = require('../utilities/testedActions');

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
    logName: '',
    logDescription: '',
    logCost: null,
    remind_id: 0,
    reminderStatus: null,
    reminderCreated: null,
    reminderDue: null,
    reminderName: '',
    reminderDescription: '',
    assetList: [],
    categoryList: [],
    logList: [],
    reminderList: [],
    reminderListOverdue: [],
    reminderListUpcoming: [],
    //VIEWS
    assetView: 0,
    catView: 0,
    modalToggler: null,
    cloudinaryUrl: [],
    editMode: false,
    logDetailsView: false,
    allLogsView: false
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
const UPDATE_LOG_NAME = "UPDATE_LOG_NAME";
const UPDATE_LOG_DESCRIPTION = "UPDATE_LOG_DESCRIPTION";
const UPDATE_LOG_COST = "UPDATE_LOG_COST";
const UPDATE_REMINDER_ID = "UPDATE_REMINDER_ID";
const UPDATE_REMINDER_STATUS = "UPDATE_REMINDER_STATUS";
const UPDATE_REMINDER_CREATED = "UPDATE_REMINDER_CREATED";
const UPDATE_REMINDER_DUE = "UPDATE_REMINDER_DUE";
const UPDATE_REMINDER_NAME = "UPDATE_REMINDER NAME"
const UPDATE_REMINDER_DESCRIPTION = "UPDATE_REMINDER_DESCRIPTION";
const GET_ALL_ASSETS = "GET_ALL_ASSETS";
const ADD_ASSET = "ADD_ASSET";
const EDIT_ASSET = "EDIT_ASSET";
const DELETE_ASSET = "DELETE_ASSET";
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
const ADD_CATEGORY = "ADD_CATEGORY";
const EDIT_CATEGORY = "EDIT_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const GET_ALL_LOGS = "GET_ALL_LOGS";
const ADD_LOG = "ADD_LOG";
const DELETE_LOG = "DELETE_LOG";
const GET_ALL_REMINDERS = "GET_ALL_REMINDERS";
const ADD_REMINDER = "ADD_REMINDER";
const EDIT_REMINDER = "EDIT_REMINDER";
const DELETE_REMINDER = "DELETE_REMINDER";
const GET_REMINDERS_OVERDUE = "REMINDER OVERDUE";
const GET_REMINDERS_COMING_UP = "GET_REMINDERS_COMING_UP";
const SET_REMINDER_STATUS_TO_CLOSED = "SET_REMINDER_STATUS_TO_CLOSED";
const SET_REMINDER_STATUS_TO_OPEN = "SET_REMINDER_STATUS_TO_OPEN";
const TOGGLE_MODAL = "TOGGLE_MODAL";
const ASSET_ROTATE = "ASSET_ROTATE";
const CAT_DISP = "CAT_DISP";
const NEW_CLOUDINARY_URL = "NEW_CLOUDINARY_URL"; // this puts the url of an uploaded image on state in cloudinaryUrl
const CREATE_IMAGE_ID = "CREATE_IMAGE_ID"
const GET_USER_INFO = "GET_USER_INFO";
const TOGGLE_EDIT_MENU = "TOGGLE_EDIT_MENU";
const TOGGLE_LOG_DETAIL_VIEW = "TOGGLE_LOG_DETAIL_VIEW";
const TOGGLE_ALL_LOGS_VIEW = "TOGGLE_ALL_LOGS_VIEW"


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
            return Object.assign({}, state, { cat_id: action.payload })
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
        case UPDATE_LOG_NAME:
            return Object.assign({}, state, { logName: action.payload })
        case UPDATE_LOG_DESCRIPTION:
            return Object.assign({}, state, { logDescription: action.payload })
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
        case UPDATE_REMINDER_NAME:
            return Object.assign({}, state, { reminderName: action.payload })
        case UPDATE_REMINDER_DESCRIPTION:
            return Object.assign({}, state, { reminderDescription: action.payload })
        case GET_ALL_ASSETS + "_FULFILLED":
            return Object.assign({}, state, { assetList: action.payload })
        case ADD_ASSET + "_FULFILLED":
            return Object.assign({}, state, { assetList: action.payload })
        case EDIT_ASSET + "_FULFILLED":
            return Object.assign({}, state, { assetList: action.payload })
        case DELETE_ASSET + "_FULFILLED":
            return Object.assign({}, state, { assetList: action.payload })
        case GET_ALL_CATEGORIES + "_FULFILLED":
            return Object.assign({}, state, { categoryList: action.payload })
        case ADD_CATEGORY + "_FULFILLED":
            return Object.assign({}, state, { categoryList: action.payload })
        case EDIT_CATEGORY + "_FULFILLED":
            return Object.assign({}, state, { categoryList: action.payload })
        case DELETE_CATEGORY + "_FULFILLED":
            return Object.assign({}, state, { categoryList: action.payload })
        case GET_ALL_LOGS + "_FULFILLED":
            return Object.assign({}, state, { logList: action.payload })
        case ADD_LOG + "_FULFILLED":
            return Object.assign({}, state, { logList: action.payload })
        case DELETE_LOG + "_FULFILLED":
            return Object.assign({}, state, { logList: action.payload })
        case GET_ALL_REMINDERS + "_FULFILLED":
            return Object.assign({}, state, { reminderList: action.payload })
        case ADD_REMINDER + "_FULFILLED":
            return Object.assign({}, state, { reminderList: action.payload })
        case EDIT_REMINDER + "_FULFILLED":
            let newReminders = {
                upcoming: action.payload.upcoming,
                overdue: action.payload.past
            }
            return Object.assign({}, state, { reminderListUpcoming: newReminders.upcoming, reminderListOverdue: newReminders.overdue })
        case DELETE_REMINDER + "_FULFILLED":
            let updatedReminders = {
                upcoming: action.payload.upcoming,
                overdue: action.payload.past
            }
            return Object.assign({}, state, { reminderListUpcoming: updatedReminders.upcoming, reminderListOverdue: updatedReminders.overdue })
        case GET_REMINDERS_OVERDUE + "_FULFILLED":
            return Object.assign({}, state, { reminderListOverdue: action.payload })
        case GET_REMINDERS_COMING_UP + "_FULFILLED":
            return Object.assign({}, state, { reminderListUpcoming: action.payload })
        case SET_REMINDER_STATUS_TO_CLOSED + "_FULFILLED":
            return Object.assign({}, state, { reminderListOverdue: action.payload.overdue, reminderListUpcoming: action.payload.upcoming })
        case SET_REMINDER_STATUS_TO_OPEN + "_FULFILLED":
            return Object.assign({}, state, { reminderList: action.payload })
        case TOGGLE_MODAL:
            return Object.assign({}, state, { modalToggler: action.payload, cloudinaryUrl: [], assetName: '', assetDescription: '', categoryName: '', categoryDescription: '', logCompleteDate: null, logName: '', logDescription: '', logCost: null, reminderDue: null, reminderName: '', reminderDescription: '' })
        case ASSET_ROTATE:
            return Object.assign({}, state, { assetView: action.payload })
        case CAT_DISP:
            return Object.assign({}, state, { catView: action.payload })
        case NEW_CLOUDINARY_URL:
            return {...state, cloudinaryUrl: [action.payload, ...state.cloudinaryUrl]}
        case CREATE_IMAGE_ID + "_FULFILLED":
            return Object.assign({}, state, { newImageId: action.payload })
        case TOGGLE_EDIT_MENU:
            return Object.assign({}, state, { editMode: action.payload })
        case TOGGLE_LOG_DETAIL_VIEW:
            return Object.assign({}, state, { logDetailsView: action.payload })
        case TOGGLE_ALL_LOGS_VIEW:
            return Object.assign({}, state, { allLogsView: action.payload })

        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        default:
            return state
    }
}

// ACTION CREATORS
export function updateAssetID(asset_id) {
    return fns.updateAssetID(asset_id)
}

export function updateAssetName(assetName) {
    return {
        type: UPDATE_ASSET_NAME,
        payload: assetName
    }
}
export function updateAssetDescription(assetDescription) {
    return {
        type: UPDATE_ASSET_DESCRIPTION,
        payload: assetDescription
    }
}
export function updateCatID(cat_id) {
    return {
        type: UPDATE_CATEGORY_ID,
        payload: cat_id
    }
}
export function updateCategoryName(categoryName) {
    return {
        type: UPDATE_CATEGORY_NAME,
        payload: categoryName
    }
}
export function updateCategoryDescription(categoryDescription) {
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

export function updateLogName(logName) {
    return fns.updateLogName(logName)
}

export function updateLogDescription(logDescription) {
    return fns.updateLogDescription(logDescription)
}

export function updateLogCost(logCost) {
    return fns.updateLogCost(logCost)
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

export function updateReminderName(reminderName) {
    return {
        type: UPDATE_REMINDER_NAME,
        payload: reminderName
    }
}

export function updateReminderDescription(reminderDescription) {
    return {
        type: UPDATE_REMINDER_DESCRIPTION,
        payload: reminderDescription
    }
}

/////////////////////////////////////

//AUTH0 - GET USER//
export function getUserInfo() {
    return {
        type: GET_USER_INFO,
        payload: axios.get('/auth/me').then( response => {
            return response.data
        })
    }
}

////////////////////////////////////

//ASSETS//
export function getAllAssets(user_id) {
    return {
        type: GET_ALL_ASSETS,
        payload: axios.get(`/api/assets/get_all/${user_id}`).then(response => {
            return response.data
        })
    }
}

export function addAsset(obj) {
    return {
        type: ADD_ASSET,
        payload: axios.post(`/api/assets/add`, obj).then(response => {
            return response.data
        })
    }
}

export function editAsset(obj) {
    return {
        type: EDIT_ASSET,
        payload: axios.patch('/api/assets/edit', obj).then(resp => {
            return resp.data
        })
    }
}

export function deleteAsset(asset_id, user_id) {
    return {
        type: DELETE_ASSET,
        payload: axios.delete(`/api/assets/delete/${asset_id}/${user_id}`).then(response => {
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

export function addCategory(obj) {
    return {
        type: ADD_CATEGORY,
        payload: axios.post(`/api/categories/add`, obj).then(response => {
            return response.data
        })
    }
}

export function editCategory(obj) {
    return {
        type: EDIT_CATEGORY,
        payload: axios.patch('/api/categories/edit', obj).then(resp => {
            return resp.data
        })
    }
}

export function deleteCategory(cat_id, user_id) {
    return {
        type: DELETE_CATEGORY,
        payload: axios.delete(`/api/categories/delete/${cat_id}/${user_id}`).then(response => {
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

export function addLog(obj) {
    console.log(obj)
    let newObj = Object.assign({}, obj.props, { logCompleteDate: obj.date })
    return {
        type: ADD_LOG,
        payload: axios.post(`/api/logs/add`, newObj).then(response => {
            return response.data
        })
    }
}

export function deleteLog(log_id, user_id) {
    return {
        type: DELETE_LOG,
        payload: axios.delete(`/api/logs/delete/${log_id}/${user_id}`).then(response => {
            return response.data
        })
    }
}

export function newCloudinaryUrl(str) {
    return {
        type: NEW_CLOUDINARY_URL,
        payload: str
    }
}

// export function createImageId(obj) {
//     console.log('action creator hit', obj)
//     return {
//         type: CREATE_IMAGE_ID,
//         payload: axios.post(`/api/images/new`, obj).then(response => {
//             return response.data
//         })
//     }
// }

// REMINDERS//

export function getAllReminders(num) {
    fns.getAllReminders(num)
}

export function addReminder(obj) {
    let newObj = Object.assign({}, obj.props, { reminderDue: obj.date })
    return {
        type: ADD_REMINDER,
        payload: axios.post(`/api/reminders/add`, newObj).then(response => {
            return response.data
        })
    }
}

export function getRemindersOverdue(num) {
    return {
        type: GET_REMINDERS_OVERDUE,
        payload: axios.get(`/api/reminders/overdue/${num}`).then(response => {
            return response.data
        })
    }
}

export function getRemindersComingUp(num) {
    return {
        type: GET_REMINDERS_COMING_UP,
        payload: axios.get(`/api/reminders/coming-in/${num}`).then(response => {
            return response.data
        })
    }
}

export function editReminder(obj) {
    const reminders = axios.patch(`/api/reminders/edit`, obj).then(res => {
        return res.data
    })
    return {
        type: EDIT_REMINDER,
        payload: reminders
    }
}

export function deleteReminder(remind_id, user_id) {
    return fns.deleteReminder(remind_id, user_id)
}

export function setReminderStatusToClosed(num, type) {
    return {
        type: SET_REMINDER_STATUS_TO_CLOSED,
        payload: axios.put(`/api/reminders/close/${num}`).then(response => {
            // response.data.list = type
            return response.data
        })
    }
}

export function setReminderStatusToOpen(num) {
    return {
        type: SET_REMINDER_STATUS_TO_OPEN,
        payload: axios.put(`/api/reminders/open/${num}`).then(response => {
            return response.data
        })
    }
}

//VIEWS
export function assetRotate(num) {
    return fns.assetRotate(num)
}

export function catDisp(num) {
    return {
        type: CAT_DISP,
        payload: num
    }
}

export function toggleModal(str) {
    return fns.toggleModal(str)
}

export function toggleEditMenu(str) {
    return fns.toggleEditMenu(str)
}

export function toggleLogDetailView(val) {
    return {
        type: TOGGLE_LOG_DETAIL_VIEW,
        payload: val
    }
}

export function toggleAllLogsView(val) {
    return {
        type: TOGGLE_ALL_LOGS_VIEW,
        payload: val
    }
}
