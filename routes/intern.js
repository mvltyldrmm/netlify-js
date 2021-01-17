const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Intern = require('../models/Intern');



router.post('/iste',(req,res,next)=>{

    const intern = new Intern(req.body);

    const promise = intern.save();


    promise.then((data)=>{
        res.json(data);
        console.log(data);
    }).catch((err)=>{
        res.json(err);
        console.log(err);
    })
});




module.exports = router;
