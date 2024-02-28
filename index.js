const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
mongoose.connect('mongodb+srv://dinesh123:Asdfg@cluster0.elphlbx.mongodb.net/?retryWrites=true&w=majority')
const schema=new mongoose.Schema({
    name:String,
    mail:String,
    adress:String,
})
const user=mongoose.model('users',schema)
// const data = new user({
//     name:"dinesh",
//     mail:"srihari@gmail.com",
//     adress:"nagka",
// })
//read
const finduser=async ()=>{
    const user=mongoose.model('users',schema)
    let data=await user.findOne({adress:'nagka'})
    console.log(data);
}
// const result = data.save()
//updateone
const updateone=async()=>{
    const user=mongoose.model('users',schema)
    let data=await user.updateMany(
        {name:'dinesh'},
        {$set:{
            name:'nikhil',
        }}
    )
    console.log(data)
}
//delete
const deleteone=async ()=>{
    const user=mongoose.model('users',schema)
    let data=await user.deleteMany({ adress:"nagka",})
    console.log(data)
}
deleteone()
app.listen(3000,()=>{
    console.log('SERVER STARTED');
})