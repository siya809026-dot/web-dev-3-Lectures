const express = require('express');
const mongoose = require('mongoose');
const Doctors = require('./doctors.model.js')
const app = express();
const port = 3000;

app.use(express.json())
//Read
app.get('/api/doctors',async(req,res)=>{
    try{
        const doctors = await Doctors.find();
        res.json(doctors);

    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
})
// Read by id
app.get('/api/doctor/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const doctor = await Doctors.findById(id);
        if(!doctor){
            return res.status(404).json({success:false,message:'Doctor not found'})
        }
        res.json(doctor);
    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
})
app.post("/api/doctor",async(req,res)=>{
    const
    try{
        const
    }
})
mongoose.connect("mongodb://localhost:27017/HOSPITALDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

app.listen(port,()=>{
    console.log(`server is running on http://localost:${port}`);
})
