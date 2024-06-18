const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flim'
  });
  // co
const { getHomepage,getUser } = require('../Controller/homeController');

const router = express.Router();


router.get('/', getHomepage);

router.get('/User', getUser);
 


module.exports = router;