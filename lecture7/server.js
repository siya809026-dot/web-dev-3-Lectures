const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes.js');

const app = express();

app.use(express.json()); // data parse coming as JSON

// read
app.use("/employees", employeeRoutes);

app.listen(3000, () => console.log(`server is running on port 3000`));