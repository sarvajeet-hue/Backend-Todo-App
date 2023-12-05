const Todo = require("../models/Todo")


exports.createTodo = async(req , res) => {
    try{
        //consume from the body of the request
        const {title , description} = req.body;
        

        //insert into the data base
        const response = await Todo.create({title , description})

        // getting response after post request
        res.status(200).json(
            {
                success : true, 
                data :response,
                message :"Entry Created Successfully"
            }
        )
    }
    catch(error){
        console.log(error)
        res.status(500).json(
            {
                success : false, 
                data :"internal server Error",
                message : "Data is not Created"
            }
        )
    }
}


