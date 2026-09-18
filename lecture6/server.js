const express = require("express");
const app = express()

app.get("/:id",(req,res)=>{
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)
    console.log(req.params.id)
    res.send("welcome sidhu")
})
app.get("/",(req,res)=>{
    console.log(req.query.name)
    console.log(req.query.age)
    res.send("hello student from id routes")
})
app.post("/",(req,res)=>{
    console.log(req.body)
    res.send 
})
app.listen(3000,()=>console.log("server is running on the port 3000"));