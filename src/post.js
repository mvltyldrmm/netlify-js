const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();


router.post('/post',(req,res)=>{
    res.end("post");
});


app.use('/.netlify/functions/post',router);




module.exports.handler = serverless(app);

