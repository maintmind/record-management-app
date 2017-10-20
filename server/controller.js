let cloudinary = require('cloudinary');

module.exports = {
    //ASSETS
    getAllAssets: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.assets.getAllAssets(req.params.user_id)
            .then(assets => res.status(200).send(assets))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addAsset: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user, assetName, assetDescription } = req.body;
        dbInstance.assets.addNewAsset(user.user_id, assetName, assetDescription)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //CATEGORY
    getAllCategories: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.categories.getAllCategories(req.params.user_id)
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

    //LOGS
    getAllLogs: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.logs.getAllLogs(req.params.cat_id)
            .then(logs => res.status(200).send(logs))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addLog: (req, res) => {
        const dbInstance = req.app.get('db');
        const { catView, user, logCompleteDate, logName, logDescription, cloudinaryUrl, logCost } = req.body;
        dbInstance.logs.addNewLog(catView, user.user_id, logCompleteDate, logName, logDescription, cloudinaryUrl, logCost)
            .then(logs => res.status(200).send(logs))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //REMINDERS
    getAllRemindersForUser: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.getAllRemindersForUser(req.params.user_id)
            .then(reminders => res.status(200).send(reminders))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addReminder: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user, catView, reminderDue, reminderName, reminderDescription } = req.body;
        dbInstance.reminders.addNewReminder(user.user_id, catView, reminderDue, reminderName, reminderDescription)
            .then(reminders => res.status(200).send(reminders))
            .catch(err => res.status(500).send(console.log(err)))
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
        const dbInstance = req.app.get('db');
        var reminders = {
            overdue: [],
            upcoming: []
        }

        dbInstance.reminders.setReminderStatusToClosed(req.params.remind_id).then(res => {
            
            dbInstance.reminders.getRemindersOverdue(1).then(res => {
                console.log("all is", res)
                reminders.overdue = res
                dbInstance.reminders.getRemindersComingUp7(1).then(res => {
                    reminders.upcoming = res;
                    console.log("fsdfsd", reminders)
                    
                    resp.status(200).send(reminders)
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