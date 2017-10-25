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
        console.log("hit?")
        return {
            type: GET_ALL_REMINDERS,
            payload: axios.get(`http://localhost:3005/api/reminders/get_all/${num}`).then((res)=>{
                console.log(res.data);
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
    }
    
}
