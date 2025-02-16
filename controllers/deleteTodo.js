const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success: true,
             message: "Todo delete",

        })
    }
    catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
}