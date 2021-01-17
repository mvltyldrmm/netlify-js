const express = require('express');

const serverless = require('serverless-http');

const app = express();
const db = require('../mongodb/db')();
const intern = require('../routes/intern');



app.use('/.netlify/functions/intern',intern);






module.exports.handler = serverless(app);

