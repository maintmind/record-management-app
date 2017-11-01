var axios = require('axios');

const UPDATE_LOG_NAME = "UPDATE_LOG_NAME";
const DELETE_REMINDER_FULFILLED = "DELETE_REMINDER_FULFILLED";
const GET_ALL_REMINDERS = "GET_ALL_REMINDERS";
const UPDATE_REMINDER_DESCRIPTION = "UPDATE_REMINDER_DESCRIPTION";
const UPDATE_REMINDER_NAME = "UPDATE_REMINDER_NAME";
const UPDATE_REMINDER_STATUS = "UPDATE_REMINDER_STATUS";
const UPDATE_LOG_DESCRIPTION = "UPDATE_LOG_DESCRIPTION";
const UPDATE_LOG_COST = "UPDATE_LOG_COST";
const TOGGLE_MODAL = "TOGGLE_MODAL";
const TOGGLE_EDIT_MENU = "TOGGLE_EDIT_MENU";
const ASSET_ROTATE = "ASSET_ROTATE";
const UPDATE_ASSET_ID = "UPDATE_ASSET_ID";
const UPDATE_ASSET_NAME = "UPDATE_ASSET_NAME";
const UPDATE_ASSET_DESCRIPTION = "UPDATE_ASSET_DESCRIPTION";
const UPDATE_CATEGORY_ID = "UPDATE_CATEGORY_ID";
const UPDATE_CATEGORY_NAME = "UPDATE_CATEGORY_NAME";
const UPDATE_CATEGORY_DESCRIPTION = "UPDATE_CATEGORY_DESCRIPTION";


module.exports = {
    updateLogName: function (logName) {
        return {
            type: UPDATE_LOG_NAME,
            payload: logName
        }
    },
    deleteReminder: function (remind_id, user_id) {
        const reminders = axios.delete(`/api/logs/delete/${remind_id}/${user_id}`).then((res) => {
            return res.data
        })
        return {
            type: DELETE_REMINDER_FULFILLED,
            payload: reminders
        }
    },
    getAllReminders: function (num, cb) {
        return {
            type: GET_ALL_REMINDERS,
            payload: axios.get(`http://localhost:3005/api/reminders/get_all/${num}`).then((res) => {
                // console.log(res.data);
                cb(res);
            })
        }
    },
    updateReminderDescription(reminderDescription) {
        return {
            type: UPDATE_REMINDER_DESCRIPTION,
            payload: reminderDescription
        }
    },
    updateReminderName(reminderName) {
        return {
            type: UPDATE_REMINDER_NAME,
            payload: reminderName
        }
    },
    updateReminderStatus(reminderStatus) {
        return {
            type: UPDATE_REMINDER_STATUS,
            payload: reminderStatus
        }
    },
    updateLogDescription(logDescription) {
        return {
            type: UPDATE_LOG_DESCRIPTION,
            payload: logDescription
        }
    },

    toggleModal(str) {
        return {
            type: TOGGLE_MODAL,
            payload: str
        }
    },

    updateLogCost(logCost) {
        return {
            type: UPDATE_LOG_COST,
            payload: logCost
        }
    },
    toggleEditMenu(str) {
        return {
            type: TOGGLE_EDIT_MENU,
            payload: str
        }
    },
    assetRotate(num) {
        return {
            type: ASSET_ROTATE,
            payload: num
        }
    },
    updateAssetID(asset_id) {
        return {
            type: UPDATE_ASSET_ID,
            payload: asset_id
        }

    },

    updateAssetName(assetName) {
        return {
            type: UPDATE_ASSET_NAME,
            payload: assetName
        }
    },

    updateAssetDescription(assetDescription) {
        return {
            type: UPDATE_ASSET_DESCRIPTION,
            payload: assetDescription
        }
    },

    updateCatID(cat_id) {
        return {
            type: UPDATE_CATEGORY_ID,
            payload: cat_id
        }
    },

    updateCategoryName(categoryName) {
        return {
            type: UPDATE_CATEGORY_NAME,
            payload: categoryName
        }
    },

    updateCategoryDescription(categoryDescription) {
        return {
            type: UPDATE_CATEGORY_DESCRIPTION,
            payload: categoryDescription
        }
    }

}
