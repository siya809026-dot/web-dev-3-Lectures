use("HOSPITALDB")

db.Doctors.find()

//create
//1.insert 2.insertOne 3.insertMany
db.Doctors.insert({
    name:"Dr. Siya Singh",
    specialization:"Cardiologist",
    experience:10,
    fees: 500,
    salary: 1000000,
    department: "Cardiology",
})

db.Doctors.insertOne({
    name:"Dr. Siddharth Singh",
    specialization:"neurologist",
    experience:10,
    fees: 10000,
    salary: 4000000,
    department: "neurologist",
})

db.Doctors.insertMany(
    [{name:"Dr. avani Singh",
    specialization:"neurologist",
    experience:10,
    fees: 10000,
    salary: 4000000,
    department: "neurologist",},


    {name:"Dr. Sidhu Singh",
    specialization:"neurologist",
    experience:10,
    fees: 10000,
    salary: 4000000,
    department: "neurologist",}]
)