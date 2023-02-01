const express = require('express');
const cors = require('cors');
const mongoose=require ('mongoose')
const post=require('./routes/posts')
const app = express()
app.use(cors())
app.use(express.json())


mongoose.set('strictQuery',true)
mongoose.connect('mongodb://localhost:27017/posts')
.then(()=>console.log('connected to mongoose'))
.catch(err=>console.log(err))

app.use('/posts',post)


app.listen(4000,()=>console.log('ready on port 4000'))