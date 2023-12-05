const express = require("express");
const app = express();

app.use(express.json())
require("dotenv").config();
const port = process.env.PORT || 4000;




const todoRouter = require("./routes/todos")

app.use('/api/v1' , todoRouter)




const dbConnect = require("./config/database")
dbConnect();




app.listen(3000 , () => {
    console.log(`server excetuded succesfully on 3000`)
})
app.get('/' , (req , res) => {
    res.send(`<h1> THis is Home Page Baby</h1>`)
})