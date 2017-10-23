var axios = require('axios');

const UPDATE_LOG_NAME = "UPDATE_LOG_NAME";
const DELETE_REMINDER_FULFILLED = "DELETE_REMINDER_FULFILLED";
const GET_ALL_REMINDERS = "GET_ALL_REMINDERS";

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
    getAllReminders: function (num) {
        return {
            type: GET_ALL_REMINDERS,
            payload: axios.get(`/api/reminders/get_all/${num}`).then(response => {
                return response.data
            })
        }
    }
}
