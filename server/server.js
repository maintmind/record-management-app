require('dotenv').config();

const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express');

const app = express();
const controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());

//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
        app.set('db', db)
})

//AUTHENTICATION (WHEN WE ARE READY)


//ASSETS ENDPOINTS
app.get('/api/assets/get_all/:id', controller.getAllAssets)
app.post('/api/assets/add', controller.addAsset)

//CATEGORY ENDPOINTS
app.get('/api/categories/get_all/:id', controller.getAllCategories)
app.post('/api/categories/add', controller.addCategory)

//LOGS ENDPOINTS


//REMINDERS ENDPOINTS



app.get('*', (req, res) => {
        console.log("None Met");
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const port = 3005
app.listen(port, console.log(`Listening on ${port}`))

