const express = require('express');
const router  = express.Router();
const Clothing   = require("../models/Clothing");

// GET request for closet view (/closet)
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