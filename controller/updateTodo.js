const Todo = require("../models/Todo")

exports.updateTodo = async(req , res) => {
    try{
       const id = req.params.id;
       const {title , description} = req.body;
       const updateValue = await Todo.findByIdAndUpdate({_id : id} , {
        title , description , updatedAt : Date.now()
       })
       res.status(200).json({
        success:true,
        data : updateValue,
        message : "updated Successfully"
       })

    }
    catch(error){
       res.status(500).json({
        success:false,
        
        message : "Not updated Successfully"
       })
    }
}


