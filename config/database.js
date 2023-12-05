 const mongoose = require("mongoose")

 require('dotenv').config();

 const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/krishnaDataBase" , {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("db connection successfull")
    })
    .catch((error) => {
        console.log("issue hai ")
        console.log(error.message)
        process.exit(1);
    })
 }
 
 module.exports = dbConnect;