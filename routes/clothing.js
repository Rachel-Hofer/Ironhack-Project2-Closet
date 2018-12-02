const express = require('express');
const router  = express.Router();
const uploadCloud = require('../config/cloudinary');

const Clothing = require("../models/Clothing");


// GET request for create clothing view (/clothing) 
router.get('/clothing', (req, res, next) => {
  res.render('views-clothing/create', {user: req.user});
});

// POST request to create new clothing (/clothing)
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

// GET request for EDIT clothing view (/clothing/._id/update)
router.get('/clothing/:theID/update', (req, res, next)=>{
  Clothing.findById(req.params.theID)
    .then((theClothing)=>{
      res.render('views-clothing/edit', {theClothing, user: req.user})
  })
    .catch((err)=>{
      console.log(err);
      next(err);
  })
})

// POST request to EDIT clothing (/clothing/._id/update)
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

// POST request to ADD date to clothing (/clothing/._id/addDate)
router.post('/clothing/:theID/addDate', (req, res, next)=>{
  Clothing.findByIdAndUpdate(req.params.theID, {$push: {lastWorn: req.body.lastWorn}})
  .then((response)=>{
      res.redirect('/clothing/'+ response._id);

  })
  .catch((err)=>{
      next(err)
  })

})

// GET request for DELETE clothing view (/delete)
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

// GET for DETAILS clothing view (/clothing/._id)
router.get('/clothing/:theID', (req, res, next)=>{
 
  Clothing.findById(req.params.theID)
    .then((allInfoOnThatPieceOfClothing)=>{

      res.render('views-clothing/showDetail', {theSpecifics: allInfoOnThatPieceOfClothing, user: req.user})
  })
    .catch((err)=>{
      next(err);
  })
})




















module.exports = router;