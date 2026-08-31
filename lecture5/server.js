const express = require('express');
const app = express()

app.use(express.json()); // data parse coming as json

const employees=[
    {empId:1,name:"Arpita",salary:100000,department:"IT"},
    {empId:2,name:"Siddharth",salary:900000,department:"IT"},
    {empId:3,name:"shreya",salary:800000,department:"sales"},
    {empId:4,name:"Nishad",salary:600000,department:"HR"},
    {empId:5,name:"Siya",salary:5000000,department:"Finance"}
]

///read
app.get("/employees",(req,res)=>{
    res.send(employees)
})

app.get("/employees/:id",(req,res)=>{
    const id = req.params.id;
    const employee=employees.find((employee)=>employee.empId===Number(id));
    if(!employee){
        res.status(404).json({success:false,message:"employee not found"})
    }
    res.json({success:true,employee})
})

app.post("/employees",(req,res)=>{
    const employee = req.body;
    employees.push({empId:employees.lentgh+1,...employees});
    res.json({success:true,employee});
})
app.put("/employees/:id",(req,res)=>{
    const id = req.params.id;
    const employee=req.body
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false,message:"employee not found"})
    }
    result.name = employee.name;
    result.salary = employee.salary;
    result.department = employee.department;
    res.json({success:true,employee})
})
app.delete("/employees/:id",(req,res)=>{
    const id = req.params.id;
    const result = employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(400).json({success:false,message:"employee not found"})
    }
    employees.splice(id-1,1);
    res.json({success:true,result})
})
app.listen(3000,()=>console.log(`server is running on port 3000`)) 