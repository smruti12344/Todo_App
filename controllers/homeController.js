
const TodoList = require('../model/model');//access collection
module.exports.home =async(req,res)=>{
    //find all task
    let task = await TodoList.find({});
    return res.render('home',{
        title:'Todo_App',
        data:task
    })

    // return res.render('home',{
    //     title:'todo_app',
    //     data:TodoList
    // })
}
//for Date() function
function DateValue(dueDate){
    let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
   let newDueDate='';
    if(dueDate!=''){
    let date = new Date(dueDate);
    let D = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
     newDueDate = `${month}/${D}/${year}`;
   }else{
    newDueDate='No Deadline';
   }
    return newDueDate;
}

module.exports.create = (req, res) => {
    let currDate = DateValue(req.body.duedate);
    // console.log(currDate);

    TodoList.create({
        desc: req.body.task,
        catagory: req.body.catg,
        dueDate: currDate // Convert newDate string to Date object
    })
    .then(() => {
        return res.redirect('/');
    })
    .catch(err => {
        console.log("error in data send:", err);
        return res.status(500).send("Error occurred while saving data.");
    });
}
//delete/controller
module.exports.delete = async(req,res)=>{
   try{
    let ids=req.query.id;
    let taskId = ids.split(',');
    // console.log(id.toString());
    for(let id of taskId){
        let task = await TodoList.findByIdAndDelete(id);
        // console.log(id);
    }
// let task = await TodoList.findByIdAndDelete({id:id});
res.redirect('/');
//     console.log("id:",id);
    // let task = TodoList.findById()
   }catch(err){
    console.log("error in delete_controller:",err);
   }
}

//edit-controller
module.exports.edit = async(req,res)=>{
   try{
    let task_id = req.query.id;
     console.log(task_id);
    let EditTask = await TodoList.findById(task_id);
    console.log(EditTask);
    return res.render('editTodo',{
        title:"edit_Todo",
        data:EditTask
    })
   }catch(err){
    console.log("error in update:",err);
    return res.redirect('/');   
}
}
//upsdate-Controller
module.exports.update = async (req,res)=>{
try{
    let id =req.query.id;
    console.log("update elem:",id);
    let upDate = DateValue(req.body.updateDate);
    // console.log("update date:",upDate);
    let upTask = await TodoList.updateOne({_id:id},{$set:{desc:req.body.updateTask,catagory:req.body.updateCatg,dueDate:upDate}});
    return res.redirect('/');
}catch(err){
    console.log("error in update details:",err);
}
}