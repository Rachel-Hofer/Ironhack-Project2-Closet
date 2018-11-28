const express    = require('express');
const router     = express.Router();
const uploadCloud = require('../config/cloudinary');

const Outfits = require("../models/Outfit");
const Clothing = require("../models/Clothing");

// POST request to create a new outfit (2 articles of clothing"
router.post('/createOutfit', uploadCloud.single('path') , (req, res, next) => {
  
  const newOutfit= {
    top: req.body.theTop,
    bottom: req.body.theBottom,
    owner: req.user._id,
    lastWorn: req.body.lastWorn,
    event: req.body.event,
  };

  if(!req.body.lastWorn){
    newOutfit.lastWorn = [];
  }

  Outfits.create(newOutfit)  
    .then(()=>{
      res.redirect('/myOutfits')
    })
    .catch((err)=> {
      next((err))
    })
})



// GET request to see the "View Outfits Page"
router.get('/myOutfits', (req, res, next) => {
  Outfits.find().populate('top').populate("bottom")
  .then((allOutfits)=>{
    res.render('views-outfit/all', {allOutfits})
})
  .catch((err)=>{
    next(err);
})
});
  
module.exports = router;