const express = require('express');
const router  = express.Router();
const uploadCloud = require('../config/cloudinary');

const Clothing = require("../models/Clothing");


// Takes you to the create new Clothing page (/clothing)
router.get('/clothing', (req, res, next) => {
  res.render('views-clothing/create');
});

// POST request to create new clohting (/clothing/:_id)
router.post('/clothing', uploadCloud.single('path') , (req, res, next) => {
  const newClothing = {
    category:req.body.category,
    season:req.body.season,
    type:req.body.type,
    subType:req.body.subType,
    color:req.body.color,
    size:req.body.size,
    lastWorn:req.body.lastWorn,
    image: req.file.url
    // owner : req.user._id
  };

  if(!req.body.lastWorn){
    newClothing.lastWorn = [];
  }

  Clothing.create(newClothing)  
    .then((newlyCreatedClothing)=>{
      res.redirect('/clothing/'+ newlyCreatedClothing._id)
    })
    .catch((err)=> {
      next((err))
    })
})

// Takes you to the edit Clothing page ()
router.get('/clothing/:theID/update', (req, res, next)=>{
  Clothing.findById(req.params.theID)
    .then((theClothing)=>{
      res.render('views-clothing/edit', {theClothing})
  })
    .catch((err)=>{
      console.log(err);
      next(err);
  })
})

router.post('/clothing/:theID/update', uploadCloud.single('path'), (req, res, next)=>{
  const changes = req.body;

  if(req.file){
    changes.image = req.file.url;
  }

  Clothing.findByIdAndUpdate(req.params.theID, changes)
  .then((response)=>{
      res.redirect('/clothing/'+ response._id);

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


// Takes you to the remove Clothing page (/removeClothing)
router.post('/clothing/:theID/delete', (req, res, next)=>{
  Clothing.findByIdAndRemove(req.params.theID)
    .then(()=>{
      res.redirect('/closet');
  })
    .catch((err)=>{
      console.log(err);
      next(err);
  })
})

// Takes you to the Clothing detail page (clothing/ID)
router.get('/clothing/:theID', (req, res, next)=>{
 
  Clothing.findById(req.params.theID)
    .then((allInfoOnThatPieceOfClothing)=>{

      res.render('views-clothing/showDetail', {theSpecifics: allInfoOnThatPieceOfClothing})
  })
    .catch((err)=>{
      next(err);
  })
})




















module.exports = router;