const express = require('express');
const router = express.Router();
const Outfit = require('../models/Outfit');

router.get('/api/outfits', (req, res, next)=>{
  Outfit.find().populate('top').populate('bottom')
    .then((allTheOutfits)=>{
      res.json(allTheOutfits)

  })
    .catch((err)=>{
      next(err);
  })
})


module.exports = router;