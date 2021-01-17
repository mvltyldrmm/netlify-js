const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();





app.use('/.netlify/functions/post',router);




module.exports.handler = serverless(app);

