const express = require('express');
const router = express.Router();
const Tags = require('../models/tags');

router.post('/create', function(req,res){
    console.log(req.body)
})





module.exports = router;
