let cloudinary = require('cloudinary');

module.exports = {
    //ASSETS
    getAllAssets: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.assets.getAllAssets(req.user.user_id)
            .then(assets => {
                res.status(200).send(assets)
            })
            .catch(err => res.status(500).send(console.log(err)))
    },

    addAsset: (req, res) => {
        const dbInstance = req.app.get('db');
        const { assetName, assetDescription } = req.body;
        const user_id = req.body.user.user_id;
        dbInstance.assets.addNewAsset(user_id, assetName, assetDescription)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    },

    editAsset: (req, res) => {
        const dbInstance = req.app.get('db');
        const { assetName, assetDescription, assetView, user } = req.body
        dbInstance.assets.editAsset(assetName, assetDescription, assetView, user.user_id)
            .then(assets => res.status(200).send(assets))
            .catch(err => res.status(500).send(console.log(err)))
    },

    deleteAsset: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.assets.deleteAsset(req.params.asset_id, req.params.user_id)
            .then(assets => res.status(200).send(assets))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //CATEGORY
    getAllCategories: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.categories.getAllCategories(req.user.user_id)
            .then(cats => res.status(200).send(cats))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addCategory: (req, res) => {
        const dbInstance = req.app.get('db');
        const { assetView, user, categoryName, categoryDescription } = req.body;
        dbInstance.categories.addNewCategory(assetView, user.user_id, categoryName, categoryDescription)
            .then(categories => res.status(200).send(categories))
            .catch(err => res.status(500).send(console.log(err)))
    },

    editCategory: (req, res) => {
        const dbInstance = req.app.get('db');
        const { categoryName, categoryDescription, cat_id, user } = req.body
        dbInstance.categories.editCategory(categoryName, categoryDescription, cat_id, user.user_id)
            .then(assets => res.status(200).send(assets))
            .catch(err => res.status(500).send(console.log(err)))
    },

    deleteCategory: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.categories.deleteCategory(req.params.cat_id, req.params.user_id)
            .then(categories => res.status(200).send(categories))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //LOGS
    getAllLogs: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.logs.getAllLogs(req.params.cat_id)
            .then(logs => res.status(200).send(logs))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addLog: (req, res) => {
        const dbInstance = req.app.get('db');
        const { assetView, catView, user, logCompleteDate, logName, logDescription, cloudinaryUrl, logCost } = req.body;
        dbInstance.logs.addNewLog(assetView, catView, user.user_id, logCompleteDate, logName, logDescription, cloudinaryUrl, logCost)
            .then(logs => res.status(200).send(logs))
            .catch(err => res.status(500).send(console.log(err)))
    },

    editLog: (req, res) => {
        const dbInstance = req.app.get('db');
        const { logCompleteDate, logName, logDescription, log_id, user, logImages } = req.body
        dbInstance.logs.editLog(logCompleteDate, logName, logDescription, logImages, log_id, user.user_id)
            .then(logs => res.status(200).send(logs))
            .catch(err => res.status(500).send(console.log(err)))
    },

    deleteLog: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.logs.deleteLog(req.params.log_id, req.params.user_id)
            .then(logs => res.status(200).send(logs))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //IMAGES
    saveImage: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user, assetView, catView, cloudinaryUrl } = req.body; // add log_id
        dbInstance.images.saveImage(user.user_id, assetView, catView, cloudinaryUrl)
            .then(img_id => res.status(200).send(img_id))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //REMINDERS
    getAllRemindersForUser: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.getAllRemindersForUser(req.params.user_id)
            .then(reminders => res.status(200).send(reminders))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addReminder: (req, resp) => {
        var newReminders = {
            upcoming: [],
            past: []
        }
        const dbInstance = req.app.get('db');
        const { assetView, catView, reminderDue, reminderName, reminderDescription } = req.body;
        const user_id = req.body.user.user_id;
        dbInstance.reminders.addNewReminder(user_id, assetView, catView, reminderDue, reminderName, reminderDescription).then(reminders => {
            dbInstance.reminders.getRemindersComingUp7(user_id).then(res => {
                newReminders.upcoming = res
                dbInstance.reminders.getRemindersOverdue(user_id).then(res => {
                    newReminders.past = res
                    resp.status(200).send(newReminders)
                })
            })
        })
    },

    editReminder: (req, resp) => {
        var newReminders = {
            upcoming: [],
            past: []
        }
        const dbInstance = req.app.get('db');
        const { reminderDue, reminderName, reminderDescription, remind_id, user } = req.body;
        dbInstance.reminders.editReminder(reminderDue, reminderName, reminderDescription, remind_id, user.user_id).then(response => {
            dbInstance.reminders.getRemindersComingUp7(user.user_id).then(res => {
                newReminders.upcoming = res
                dbInstance.reminders.getRemindersOverdue(user.user_id).then(res => {
                    newReminders.past = res
                    resp.status(200).send(newReminders)
                })
            })
        })
    },

    deleteReminder: (req, resp) => {
        var newReminders = {
            upcoming: [],
            past: []
        }
        const dbInstance = req.app.get('db');
        dbInstance.reminders.deleteReminder(req.params.remind_id, req.params.user_id).then(reminders => {
            dbInstance.reminders.getRemindersComingUp7(req.params.user_id).then(res => {
                newReminders.upcoming = res
                dbInstance.reminders.getRemindersOverdue(req.params.user_id).then(res => {
                    newReminders.past = res
                    resp.status(200).send(newReminders)
                })
            })
        })
    },

    getRemindersOverdue: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.getRemindersOverdue(req.params.user_id)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    },

    getRemindersComingUp7: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.getRemindersComingUp7(req.params.user_id)
            .then(reminders => res.status(200).send(reminders))
            .catch(err => res.status(500).send(console.log(err)))
    },

    setReminderStatusToClosed: (req, resp) => {
        let reminderList = {
            overdue: [],
            upcoming: []
        }

        const dbInstance = req.app.get('db');
        dbInstance.reminders.setReminderStatusToClosed(req.params.remind_id).then(res => {
            dbInstance.reminders.getRemindersOverdue(req.params.user_id).then(res => {
                reminderList.overdue = res
                dbInstance.reminders.getRemindersComingUp7(req.params.user_id).then(res => {
                    reminderList.upcoming = res;
                    resp.status(200).send(reminderList)
                })
            })
        })
    },

    setReminderStatusToOpen: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.setReminderStatusToOpen(req.params.remind_id)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    }
}