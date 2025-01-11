const mongoose = require('mongoose');
require('dotenv').config();

//define MongoDB URL
//const mongoURL = 'mongodb://localhost:27017/hotels' //replace mydatabase with your db name 
const mongoURL = process.env.MONGODB_URL;
//Set up mongodb connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

//get default connection
//mogoose maintain a default connection object representing the MongoDB connection
const db = mongoose.Connection;


//Definre event listenrs for db connection
mongoose.connection.on('connected', () =>{
    console.log('connected to mongoDb server')
})
mongoose.connection.on('error', (err) =>{
    console.log('MongoDB connect error', err)
})
mongoose.connection.on('disconnected', () =>{
    console.log('mongoDb disconnected ')
})

//Export the db connection 

module.exports = mongoose;
