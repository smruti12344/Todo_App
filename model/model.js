const mongoose = require('mongoose');

//todo_schema
const todo_schema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
        // default:Date.now
    }
});

//collection name
const TodoList = mongoose.model('TodoList',todo_schema);
module.exports=TodoList;