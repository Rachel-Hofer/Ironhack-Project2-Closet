const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const uploadCloud = require('../config/cloudinary');

const User = require('../models/User');

// GET request to view Signup Page (/signup)
router.get('/signup', (req, res, next) => {
    res.render('views-user/signup');
  });

// POST request to sign-up
  router.post('/signup', uploadCloud.single('path') , (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const theHash = bcrypt.hashSync(req.body.password, salt);

           const theNewUser = {
            username: req.body.username,
            password: theHash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userEmail: req.body.userEmail,
            image: req.file.url
           };

    if(username === "" || password === "") {
        res.render("views-user/signup", { message: "Indicate username and password" });
        return;
      }

      User.findOne({username: username})
        .then((user) => {
                if (user !== null) {
                    res.render("views-user/signup", { message: "The username already exists" });
                    return;
                    }

           User.create(theNewUser)
              .then((theUser)=>{
                req.login(theUser, (err) => {
                  if (err) {
                      req.flash('error', 'something went wrong with auto login, please log in manually')
                      res.redirect('/login')
                      return;
                  }
                       res.redirect('/userHome');
                  })
              
                }) 
               .catch((err)=>{
                   next(err);
               })
              })
           .catch((err)=>{
               next(err);
           })
  }) // end of signup POST


// Takes you to the Login Page (/login)
router.get('/login', (req, res, next) => {
    res.render('views-user/login')
  });

// need login POST request to login
router.post("/login", passport.authenticate("local", {
  successRedirect: "/userHome",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));


// Takes you to the your userHome Page (/userHome)
router.get('/userHome', (req, res, next) => {
      res.render('views-user/userHome', {user: req.user})
});


// GET request to view profile (/profile)
router.get('/profile', (req, res, next) => {
  res.render('views-user/profile', {theLoggedinUser: req.user})
});

// GET request to view update profile (/profile/ID/update)
router.get('/profile/:theID/update', (req, res, next) => {
  res.render('views-user/editProfile', {theLoggedinUser: req.user})
});

// POST request to edit/update profile
router.post('/profile/:theID/update', uploadCloud.single('path'), (req, res, next)=>{
  const changes = req.body;
  console.log("this should be req.body", changes)
  if(req.file){
    changes.image = req.file.url;
  }

  User.findByIdAndUpdate(req.params.theID, changes)
  .then((response)=>{
      console.log("this should be the updated response", response)
      console.log("this should be the updated changes??", changes)
      res.redirect('/profile');

  })
  .catch((err)=>{
      next(err)
  })
})


router.post('/clothing/:theID/addDate', (req, res, next)=>{
  Clothing.findByIdAndUpdate(req.params.theID, {$push: {lastWorn: req.body.lastWorn}})
  .then((response)=>{
      res.redirect('/clothing/'+ response._id);

  })
  .catch((err)=>{
      next(err)
  })

})


// Logs you out -> takes you to the your Home page (/)
router.get('/logout', (req, res, next)=>{
  req.logout()
  res.redirect('/');
})













  module.exports = router;
