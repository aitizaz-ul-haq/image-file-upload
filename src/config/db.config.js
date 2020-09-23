//add mongoose middleware
const mongoose = require('mongoose');

//providing db url in env file
const uri = process.env.DB_URL;

//provide mongoose options
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}   

//create connection with mongoose to database
mongoose.connect(uri, options)
.then(() => {
    console.log('connection established')
})
.catch((err) => {
    console.log(err);
})