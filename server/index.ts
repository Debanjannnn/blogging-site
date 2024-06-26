import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user'

import blogRouter from './routes/blog'
import cors from 'cors'
import commentRouter from './routes/comment'
import { mongooseConnect } from './connection/connect'
dotenv.config()


const app= express()
mongooseConnect()
app.use(cors({
    origin: 'https://sejal-blogging.vercel.app', 
    credentials:true
  })); 

// app.use(cors({
//   origin: 'http://localhost:3000', 
//   credentials:true
// })); 
  
app.use(express.json())
app.use('/user',userRouter)
app.use('/blog',blogRouter)
app.use('/comment', commentRouter)
app.use('/', (req,res)=> {
  res.json({message:"Hello"})
})

app.listen(process.env.PORT , ()=> console.log(`Server listening on port ${process.env.PORT}`))




