const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    
    app.set('view', path.join('./src', 'view'));
    app.set('view engine', 'ejs');
    //config static files
    app.use(express.static(path.join(__dirname, 'public')));
}

module.exports = configViewEngine;