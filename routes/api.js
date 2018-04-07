var express = require('express');
var router = express.Router();
var fs = require('fs');
var dbHelper = require('./dbHelper')

//sample api to fetch company profile
//To hit this api from local host use url http://localhost:3000/api/companyProfile 
router.post('/companyProfile', function (req, res, next) {
  console.log('/companyProfile', req.body)
  dbHelper.getProfile(req.body.corporate_id, function (result, err) {
    res.json({ result: result, error: err });
  });
});


module.exports = router;
