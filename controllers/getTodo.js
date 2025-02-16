const Todo = require("../models/Todo");

exports.getTodo = async (req,res)=>{
    try{
        const todos = await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data featch",

        })
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"interneal server error",
            message:err.message,
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;

        // Corrected line
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found for Given ID",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} successfully fetched`,
        });
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
};
