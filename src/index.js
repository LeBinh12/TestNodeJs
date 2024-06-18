const express = require('express')
const path = require('path')
const app = express()
const connection = require("../src/Config/database")
const port = 8080;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./Config/ViewEngine.js');
const webRouter = require('./router/web.js');
require('dotenv').config()

// console.log("Check",process.env.PORT)
configViewEngine(app);




app.use('/',webRouter);

//config template
// app.set('views', path.join(__dirname,'Views'))
// app.set('view engine', 'ejs')
app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})

