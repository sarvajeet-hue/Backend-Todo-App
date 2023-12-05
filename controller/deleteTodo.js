const Todo = require("../models/Todo")


exports.deleteTodo = async(req , res) => {
    try{
       const {id} = req.params;
       const detetedId = await Todo.findByIdAndDelete(id)

       res.status(200).json({
        success:true, 
        message : "data deleted successfully"
       })
    }
    catch(error){
        console.log(error)
        res.status(500).json(
            {
                success : false, 
                data :"internal server Error",
                message : "Not Deleted"
            }
        )
    }
}


