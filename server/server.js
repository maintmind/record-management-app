require('dotenv').config();

const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express'),
        cloudinary = require('cloudinary');

const app = express();
const controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());

//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
        app.set('db', db)
})


//CLOUDINARY CONFIG (FOR PHOTO UPLOADS)
cloudinary.config(process.env.CLOUDINARY_URL)


//AUTHENTICATION (WHEN WE ARE READY)


//ASSETS ENDPOINTS
app.get('/api/assets/get_all/:id', controller.getAllAssets)
app.post('/api/assets/add', controller.addAsset)

//CATEGORY ENDPOINTS
app.get('/api/categories/get_all/:id', controller.getAllCategories)
app.post('/api/categories/add', controller.addCategory)

//LOGS ENDPOINTS
app.get('/api/logs/get_all/:cat_id', controller.getAllLogs)
app.post('/api/logs/add/:cat_id', controller.addLog)

//REMINDERS ENDPOINTS
app.post('/api/reminders/add/:user_id', controller.addReminder)
app.get('/api/reminders/overdue/:user_id', controller.getRemindersOverdue)
app.get('/api/reminders/coming-in/:user_id', controller.getRemindersComingUp7)
app.put('/api/reminders/close/:remind_id', controller.setReminderStatusToClosed)
app.put('/api/reminders/open/:remind_id', controller.setReminderStatusToOpen)
// app.get('/api/reminders/get_all/:user_id', controller.getAllRemindersForUser)

//CLOUDINARY ENDPOINTS
app.post('/api/upload', controller.imageUpload)

// app.post('/api/reminder/add', controller.addReminder)
// app.get('/api/reminders/overdue', controller.getRemindersOverdue)
// app.get('/api/reminders/coming-in/:days', controller.getRemindersComingUp)
// app.get('/api/reminders/get_all/:asset_id', controller.getAllRemindersForAsset)
// app.get('/api/reminders/get_all/:asset_id', controller.getAllRemindersForAsset)
// app.get('/api/reminders/get_all/:asset_id', controller.getAllRemindersForAsset)


app.get('*', (req, res) => {
        console.log("None Met");
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const port = 3005
app.listen(port, console.log(`Listening on ${port}`))

