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
        const { user_id, title, description } = req.body;
        dbInstance.assets.addNewAsset(user_id, title, description)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    },

    //CATEGORY
    getAllCategories: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.categories.getAllCategories(req.params.id)
            .then(cats => res.status(200).send(cats))
            .catch(err => res.status(500).send(console.log(err)))
    },

    addCategory: (req, res) => {
        const dbInstance = req.app.get('db');
        const { asset_id, user_id, title, description } = req.body;
        dbInstance.categories.addNewCategory(asset_id, user_id, title, description)
            .then(asset => res.status(200).send(asset))
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
        const { date_submit, date_complete, title, description, img, cost } = req.body;
        dbInstance.logs.addNewLog(req.params.cat_id, date_submit, date_complete, title, description, img, cost)
            .then(log => res.status(200).send(log))
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
        const { cat_id, status, date_created, date_due, title, description } = req.body;
        dbInstance.reminders.addNewReminder(req.params.user_id, cat_id, status, date_created, date_due, title, description)
            .then(reminder => res.status(200).send(reminder))
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
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    },

    setReminderStatusToClosed: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.setReminderStatusToClosed(req.params.remind_id)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    },

    setReminderStatusToOpen: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.reminders.setReminderStatusToOpen(req.params.remind_id)
            .then(asset => res.status(200).send(asset))
            .catch(err => res.status(500).send(console.log(err)))
    }

}