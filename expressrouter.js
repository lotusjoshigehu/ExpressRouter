const express=require('express')
const app=express()
const orderrouter=require('./routes/orders')
const userRouter=require('./routes/users')
app.use('/orders',orderrouter)

app.use('/users',userRouter)


app.listen(3000,()=>
{
    console.log("Server is running on http://localhost:3000")
})