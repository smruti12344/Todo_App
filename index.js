const express = require('express'); //access express_lib
const port =8080; //access port where server render
const app = express(); //naming convention of express
const path = require('path');
const mongoose = require('./config/mongoose'); //mongodb connection
const TodoList = require('./model/model'); //schema_access
//MiddleWare
app.use(express.urlencoded());
//access static accets
app.use(express.static('./asstes'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//set-up views
app.set('view engine','ejs');
app.set('views','./views');
//set-up routers
app.use('/',require('./routers'));



//server start
app.listen(port,function(err){
    if(err){
        console.log(`Error in server start:${err}`);
    }
    console.log(`Server start at port:${port}`);
})