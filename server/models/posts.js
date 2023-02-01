const mongoose=require('mongoose')
mongoose.set('strictQuery',true)

const Post= mongoose.model('Posts',new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
    
}))
exports.Post=Post

