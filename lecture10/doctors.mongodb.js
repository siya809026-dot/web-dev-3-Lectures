use("HOSPITALDB")

// db.Doctors.find()

//create
//1.insert 2.insertOne 3.insertMany
// db.Doctors.insert({
//     name:"Dr. Siya Singh",
//     specialization:"Cardiologist",
//     experience:10,
//     fees: 500,
//     salary: 1000000,
//     department: "Cardiology",
// })

// db.Doctors.insertOne({
//     name:"Dr. Siddharth Singh",
//     specialization:"neurologist",
//     experience:10,
//     fees: 10000,
//     salary: 4000000,
//     department: "neurologist",
// })

// db.Doctors.insertMany(
//     [{name:"Dr. nitin Singh",
//     specialization:"homeopathic",
//     experience:14,
//     fees: 10000,
//     salary: 4000000,
//     department: "homeopathic",},


//     {name:"Dr. sumit Singh",
//     specialization:"Ayurveda",
//     experience:13,
//     fees: 10000,
//     salary: 4000000,
//     department: "Ayurveda",},

//    {name:"Dr. ekta Singh",
//     specialization:"gynacologist",
//     experience:12,
//     fees: 10000,
//     salary: 4000000,
//     department: "gynac",},

//     {name:"Dr. shalu rai",
//     specialization:"gynacologist",
//     experience:11,
//     fees: 10000,
//     salary: 4000000,
//     department: "gynac",},

//     {name:"Dr. madhukar rai",
//     specialization:"cardiologist",
//     experience:10,
//     fees: 10000,
//     salary: 4000000,
//     department: "cardiac",},

//     {name:"Dr. sarika rai",
//     specialization:"gynacologist",
//     experience:11,
//     fees: 10000,
//     salary: 4000000,
//     department: "gynac",},

//     {name:"Dr. shishir rai",
//     specialization:"gynacologist",
//     experience:11,
//     fees: 10000,
//     salary: 4000000,
//     department: "gynac",},

//     {name:"Dr. Avinash rai",
//     specialization:"gynacologist",
//     experience:11,
//     fees: 10000,
//     salary: 4000000,
//     department: "gynac",}]
// )


// read operation

// db.Doctors.find()
// db.Doctors.findOne()
// db.Doctors.find({name: "Dr. Siddharth Singh"})
// db.Doctors.find({department: "neurologist"})


// update operation 1.updateOne() 2. updateMany()
// db.Doctors.updateOne({name: "Dr. Siddharth Singh"},
//     {
//         $set:{
//             fees:1800,
//             experience:18
//         }
//     }
// )

// db.Doctors.updateMany(
//     {name:"Dr. Siddharth Singh"},
//     {
//         $set:{
//             fees:4500,
//             experience:31
//         }
//     }
// )

//delete operation 1. deleteOne() 2. deleteMany()

// db.Doctors.deleteOne({name:"Dr. avani Singh"})


// db.Doctors.deleteMany({department: "neurologist"})

// db.Doctors.find(
//     {
//         fees:{
//             $gte:1500   
//         }

//     }
// )

// db.Doctors.find(
//     {
//         department:{
//             $eq:"Ayurveda"   
//         }

//     }
// )

// db.Doctors.find(
//     {
//         $or:[
//             {department:"Dermatologist"},
//             {fees:{$gte:1500}}
//         ]
//     }
// )

// projection {} all(what we want from all data)

// db.Doctors.find({},{name:1,department:1,_id:0})

// db.Doctors.find().limit(2)
// db.Doctors.find().skip(1).limit(2)

// db.Doctors.find().sort({fees:-1})

// db.Doctors.aggregate(
//     [
//         {
//             $match: {
//                 department:"gynac"
//             }
//         }
//         ,{
//             $project: {
//               name:1,
//               fees:1,
//               salary:1,
//               experience:1,
//               _id:0
//             }
//         }
//         ,{
//             $group: {
//               _id: "$experience",
//               totalSalary:{$sum:"$salary"},
//               avgSalary:{$avg:"$salary"},
//               maxSalary:{$max:"$salary"},
//               minSalary:{$min:"$salary"},
//               totalDoctors:{$sum:1}
//             }
//         },
//         {
//             $sort:{
//                 totalSalary:-1   
//             }
//         },{
//            $limit: 1
//         }
//         ,{
//             $count: 'totalsalary'
//         }        
//     ]
// )


db.Doctors.createIndex(name:1)
db.Doctors.getIndex()
 