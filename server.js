import express from "express";
import router from "./component/khalti.js";


const app=express();
const port=3000  //put this in env section during implementation

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use('/api',router)

app.listen(port,()=>{
    console.log('App is running in port :',port)
})