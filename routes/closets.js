const express = require('express');
const router  = express.Router();
const Clothing   = require("../models/Clothing");

// Takes you to your CLoset main page (/)
router.get('/closet', (req, res, next) => {
  Clothing.find()
      .then((allClothing)=>{
        res.render('views-closet/home', {allClothing, user: req.user})
      })
      .catch((err)=>{
        next(err);
    })
  })





















module.exports = router;