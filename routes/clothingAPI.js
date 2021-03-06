const express = require('express');
const router = express.Router();
const Clothing = require('../models/Clothing');

// API GET request for clothing "type" (top or bottom)
router.get('/api/clothing/:type', (req, res, next)=>{
  Clothing.find({type: req.params.type})
    .then((allTheClothing)=>{
      res.json(allTheClothing)

  })
    .catch((err)=>{
      next(err);
  })
})


module.exports = router;