const express = require('express');
const router  = express.Router();

// GET request for homepage (/)
router.get('/', (req, res, next) => {
  res.render('index');
});





















module.exports = router;
