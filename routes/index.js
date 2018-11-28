const express = require('express');
const router  = express.Router();

// Takes you to the Homepage (/)
router.get('/', (req, res, next) => {
  res.render('index');
});

// Takes you to the Homepage (/)
// router.get('/', (req, res, next) => {
//   res.render('index');
// });




















module.exports = router;
