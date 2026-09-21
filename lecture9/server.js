const express = require("express");
const app = express();
const PORT = 3000;

app.get("/get-check/:age",(req,res,next)=>{
    let age=parseInt(req.params.age);
    try{
        if(age<18){
            throw new Error("you are not eligible to vote coz you are below 18");
            
        }else{
            res.send("yes are eligible to vote");
        }
    }catch(error){
        // res.status(500).json({success:false,message:"Age is less than 18"});
        next(error);
    }
})

app.use((err,req,res,next)=>{
         res.status(500).json({success:false,message:err.message})
})

app.use((req,res)=>{ ///invalid route middleware    
    res.status(404).json({success:false,message:"Route not found"});
})
app.listen(PORT,()=>console.log("server is running on port 3000"));