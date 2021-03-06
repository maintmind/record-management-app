require('dotenv').config();

const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express'),
        passport = require('passport'),
        Auth0Strategy = require('passport-auth0'),
        session = require('express-session'),
        cloudinary = require('cloudinary');

const app = express();
const controller = require('./controller');

app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../public/build` ) );
app.use(cors());

app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
      }));

//MIDDLEWARE USING PASSPORT
app.use( passport.initialize() );
app.use( passport.session() );


//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
        app.set('db', db)
})

//CLOUDINARY CONFIG (FOR PHOTO UPLOADS)
cloudinary.config(process.env.CLOUDINARY_URL)

//AUTHENTICATION -- AUTH0
passport.use(new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK
      }, function(accessToken, refreshToken, extraParams, profile, done){
       
        const db = app.get('db');
        db.users.find_user(profile.id).then( user => {
          if(user[0]) {
            return done(null, user[0]);
          } else {
            db.users.create_user([profile.displayName, profile.emails[0].value,
            profile.picture, profile.id]).then(user => {
              return done(null, user[0]);
            })
          }
        })
      }));
      
      //SERIALIZE-USER INVOKED ONE TIME TO SET THINGS UP
      passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      //USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
      passport.deserializeUser(function(user, done){
        app.get('db').users.find_session_user(user.user_id).then(user => {
          return done(null, user[0]);
        })
      });
      
      //ENDPOINT -- PASSPORT AUTHENTICATE
      app.get('/auth', passport.authenticate('auth0'));
      
      //ENDPOINT AUTH CALLBACK
      app.get('/auth/callback', passport.authenticate('auth0', {
        successRedirect: 'http://localhost:3000/dashboard',
        failureRedirect: 'http://localhost:3000/'
      }));
      
      //ENDPOINT AUTH0 - CHECKING FOR USER
      app.get('/auth/me', (req, res) => {
        if(!req.user) {
          return res.status(404).send('User not found')
        } else {
          return res.status(200).send(req.user);
        }
      });
      
      //AUTH ENDPOINT (Logout)
      app.get('/auth/logout', (req, res) => {
        req.logout() //PASSPORT TO TERMINATE LOGIN SESSION
        return res.redirect(302, 'http://localhost:3000/'); //res.redirect comes from express to redirect user to the given url
      })


//ASSET ENDPOINTS
app.get('/api/assets/get_all/:user_id', controller.getAllAssets)
app.post('/api/assets/add', controller.addAsset)
app.patch('/api/assets/edit', controller.editAsset)
app.delete('/api/assets/delete/:asset_id/:user_id', controller.deleteAsset)

//CATEGORY ENDPOINTS
app.get('/api/categories/get_all/:user_id', controller.getAllCategories)
app.post('/api/categories/add', controller.addCategory)
app.patch('/api/categories/edit', controller.editCategory)
app.delete('/api/categories/delete/:cat_id/:user_id', controller.deleteCategory)

//LOG ENDPOINTS
app.get('/api/logs/get_all/:cat_id', controller.getAllLogs)
app.post('/api/logs/add', controller.addLog)
app.patch('/api/logs/edit', controller.editLog)
app.delete('/api/logs/delete/:log_id/:user_id', controller.deleteLog)

//IMAGES ENDPOINTS
app.post('/api/images/new', controller.saveImage)

//REMINDER ENDPOINTS
app.get('/api/reminders/overdue/:user_id', controller.getRemindersOverdue)
app.get('/api/reminders/coming-in/:user_id', controller.getRemindersComingUp7)
app.post('/api/reminders/add', controller.addReminder)
app.patch('/api/reminders/edit', controller.editReminder)
app.put('/api/reminders/close/:remind_id/:user_id', controller.setReminderStatusToClosed)
app.put('/api/reminders/open/:remind_id', controller.setReminderStatusToOpen)
app.delete('/api/reminders/delete/:remind_id/:user_id', controller.deleteReminder)
app.get('/api/reminders/get_all/:user_id', controller.getAllRemindersForUser)


const port = 3005
app.listen(port, console.log(`Listening on ${port}`))

