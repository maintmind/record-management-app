require('dotenv').config();

const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express'),
        // passport = require('passport'),
        // Auth0Strategy = require('passport-auth0'),
        // session = require('express-session'),
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
//AUTHENTICATION (AUTH0)
// passport.use(new Auth0Strategy({
//         domain: process.env.AUTH_DOMAIN,
//         clientID: process.env.AUTH_CLIENT_ID,
//         clientSecret: process.env.AUTH_CLIENT_SECRET,
//         callbackURL: process.env.AUTH_CALLBACK
//       }, function(accessToken, refreshToken, extraParams, profile, done){
          
//         const db = app.get('db');
//         db.{REVISE HERE FOR DATABASE}(profile.emails[0].value).then( user => {
//           if(user[0]) {
//             return done(null, user);
//           } else {
//             db.{REVISE HERE FOR DATABASE}([profile.name.givenName, profile.name.familyName, profile.emails[0].value
//             ]).then( user => {
//               return done(null, user);
//             })
//           }
//         })
//       }));
      
//       //THIS IS INVOKED ONE TIME TO SET UP
//       passport.serializeUser(function(user, done) {
//         done(null, user[0]);
//       });
      
//       //USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
//       passport.deserializeUser(function(user, done){
//         done(null, user);
//       });
      
//       //ENDPOINT #1 - AUTH0 AUTHENTICATION
//       app.get('/auth', passport.authenticate('auth0', {
//         successRedirect: 'http://localhost:3000/#/dashboard',
//         failureRedirect: 'http://localhost:3000/#/'
//       }));
      
//       //ENDPOINT (Login)
//       app.get('/auth/me', (req, res) => {
//         if(!req.user) {
//           return res.status(404).send('User not found')
//         } else {
//           return res.status(200).send(req.user);
//         }
//       });
      
//       //ENDPOINT (Logout)
//       app.get('/auth/logout', (req, res) => {
//         req.logout() //PASSPORT GIVES US THIS TO TERMINATE A LOGIN SESSION
//         return res.redirect(302, 'http://localhost:3000/#/'); 
//       })


//ASSET ENDPOINTS
app.get('/api/assets/get_all/:user_id', controller.getAllAssets)
app.post('/api/assets/add', controller.addAsset)
app.delete('/api/assets/delete/:asset_id/:user_id', controller.deleteAsset)

//CATEGORY ENDPOINTS
app.get('/api/categories/get_all/:user_id', controller.getAllCategories)
app.post('/api/categories/add', controller.addCategory)
app.delete('/api/categories/delete/:cat_id/:user_id', controller.deleteCategory)

//LOG ENDPOINTS
app.get('/api/logs/get_all/:cat_id', controller.getAllLogs)
app.post('/api/logs/add', controller.addLog)
app.delete('/api/logs/delete/:log_id/:user_id', controller.deleteLog)

//REMINDER ENDPOINTS
app.post('/api/reminders/add', controller.addReminder)
app.get('/api/reminders/overdue/:user_id', controller.getRemindersOverdue)
app.get('/api/reminders/coming-in/:user_id', controller.getRemindersComingUp7)
app.put('/api/reminders/close/:remind_id', controller.setReminderStatusToClosed)
app.put('/api/reminders/open/:remind_id', controller.setReminderStatusToOpen)
app.delete('/api/reminders/delete/:remind_id/:user_id', controller.deleteReminder)
// app.get('/api/reminders/get_all/:user_id', controller.getAllRemindersForUser)


// controller.imageUpload)

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

