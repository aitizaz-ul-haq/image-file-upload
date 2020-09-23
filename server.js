// adding dependencies. .  .   .  .  .
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

//include dbconfig files and enviroment 
require("dotenv").config();
require('./src/config/db.config');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// adding cors
app.use(cors())

// import routes
require('./src/app/routes/user.route')(app);



// creating port to run server
const port = process.env.PORT || 3000;

// running server
app.listen(port, (req, res) => {
    console.log('server running on port 3000')
})