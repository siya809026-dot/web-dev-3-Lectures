const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000
app.use(morgan())
// const logmiddleware = (req,res,next)=>{
//     //console.log(req.name)
//     req.name = "john Doe"
//     console.log(`${req.method} ${req.url}`,"Time:",new Date().toLocaleString());
//     // res.send("Hello from middleware")
//     next()
// }

const apicheckmiddleware=(req,res,next)=>{
    if(req.query.API_KEY === "1234"){
        console.log("Authentication");
        next()
    }else{
        res.send("Api invalid")
    }
}
// app.use(logmiddleware);
app.use(apicheckmiddleware);
 
app.get("/",(req,res)=>{
    console.log("hello world")
    res.send("Hello world")
})
app.get("/data",(req,res)=>{
    console.log("Hello data");
    res.json({
        city:"Newyork",
        country:"usa",
        temp:32,
        humidity:80
    })
})


app.listen(PORT,()=>{
    console.log(`server is runnig on port ${PORT}`);
})