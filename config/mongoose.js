// const mongoose = require('mongoose'); //access mongoose lib
// //connect
// mongoose.connect('mongodb://localhost:27017/Todo_App');

// const db = mongoose.Connection;
// db.on('error',()=>{
//     console.log('error:',err);
// })
// db.on('connected',()=>{
// console.log("connected");
// })
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Todo_App');
const db=mongoose.connection;
db.on('error',function(err){
    console.log('error',err);
})
db.on('connected',function(){
    console.log("connected to database");
})
db.on('open',()=>{
  console.log("open");
})