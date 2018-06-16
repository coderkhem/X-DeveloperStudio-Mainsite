'use strict'
const port = process.env.PORT || 8080;
const express =require('express');
const https = require('https');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const app = express();
app.use(morgan('combined'));
app.listen(port, function() {
    console.log(`Our site is hosted on ${port}! If you donot know to open just go to browser and type (localhost:${port})`);
});
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});