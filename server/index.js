import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import useRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connet to mongoDb!');    
})
 .catch((error)=>{
    console.log(error);
    
 })
const app =express();
app.use(express.json())
app.listen(3000,()=>{
    console.log('Server the is srunning onport 3000!!!!!uuuu');
    
})
app.use('/api/user',useRouter)
app.use('/api/auth',authRouter);

//Middleware

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500
    const message=err.message || "Internaal server error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})