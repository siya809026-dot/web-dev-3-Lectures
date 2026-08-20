const express=require("express");
const app = express();
const Port = 3000
const users=[
    {id:101,name:"siya",email:"siya@gmail.com"},
    {id:102,name:"riya",email:"riya@gmail.com"},
    {id:103,name:"priya",email:"priya@gmail.com"},
    {id:104,name:"diya",email:"diya@gmail.com"},
]

app.get("/",(req,res)=>{
    res.send("hello siya");
})
app.get("/about",(req,res)=>{
    res.send("<h1>Hello from about page</h1>")
})
app.get("/users",(req,res)=>{
    res.json(users)
})
app.listen(Port,()=>{
    console.log(`server is running on port {Port}`)
}) 