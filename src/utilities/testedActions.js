const UPDATE_LOG_NAME = "UPDATE_LOG_NAME";
const UPDATE_REMINDER_DESCRIPTION = "UPDATE_REMINDER_DESCRIPTION";
const UPDATE_REMINDER_NAME = "UPDATE_REMINDER_NAME";
const UPDATE_REMINDER_STATUS = "UPDATE_REMINDER_STATUS";
const UPDATE_LOG_DESCRIPTION = "UPDATE_LOG_DESCRIPTION";
const UPDATE_LOG_COST = "UPDATE_LOG_COST";
const TOGGLE_MODAL = "TOGGLE_MODAL";

module.exports = {
    updateLogName(logName) {
        return {
            type: UPDATE_LOG_NAME,
            payload: logName
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