import mongoose from 'mongoose'


const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
      },
})
const taskModel=mongoose.model('Task',taskSchema)

export default taskModel