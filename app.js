require('dotenv').config();

// included in Irongenerator
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

// additional packages I added
const mongodb       = require('mongodb');
const session       = require("express-session");
const bcrypt        = require("bcryptjs");
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash         = require("connect-flash");
const axios        = require("axios");

require('./config/passport'); // connects passport.js file
require('./config/cloudinary'); // connects cloudinary.js file
require('popper.js/dist/umd/popper');  // connects npm popper.js package

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// JSON connection  
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// Express connection
const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// activate the flash messages package
app.use(flash());

// configures and activates a session in express
app.use(session({
    secret: "our-passport-local-strategy-app",
    resave: true,
    saveUninitialized: true
  }));
 
app.use(passport.initialize()); // 'turns on' the passport package
app.use(passport.session());  // connects passport to the session you created

// app.locals.closetBackground = '/images/biggestClosetPhoto.jpg'



// connects all routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/users'));
app.use('/', require('./routes/clothing'));
app.use('/', require('./routes/closets'));
app.use('/', require('./routes/outfits'));
app.use('/', require('./routes/clothingAPI'));
app.use('/', require('./routes/outfitAPI'));

module.exports = app;
