const UPDATE_LOG_NAME = "UPDATE_LOG_NAME";

module.exports = {
    updateLogName(logName) {
        return {
            type: UPDATE_LOG_NAME,
            payload: logName
        }
    }
}