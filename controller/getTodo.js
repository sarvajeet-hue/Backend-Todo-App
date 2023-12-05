const Todo = require("../models/Todo")


exports.getTodo = async (req, res) => {
    try {
        const Todos = await Todo.find({})

        res.status(200).json(
            {
                success: true,
                data: Todos,
                message: "Data is retreved"
            }

        )
    }
    catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success: false,
                data: "Data not retrived",
                message: "not Found"
            }
        )
    }
}



exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id: id })

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `this ${id} data is found`
        })

    }

    catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "error"
        })
    }
}
