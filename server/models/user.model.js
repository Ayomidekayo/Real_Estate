import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true, 
    }, 
    avatar:{
       type:String,
       default:"https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740"
    }
}, {timestamps: true});;

const User=mongoose.model('User',userSchema)
export default User;