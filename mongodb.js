const mongoose=require("mongoose")

mongoose.connect("mongoose://localhost:27017/E-learning")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("mongoo not connected");
})

const logSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("loginCollection",logSchema)

module.exports=collection
