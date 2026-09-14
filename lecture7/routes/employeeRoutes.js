const { getEmployeeById, addEmployee, updateEmployee, deleteEmployee, getEmployees } = require('../Controller/employeeController.js');

const router = require('express').Router();

router.get("/", getEmployees);

router.get("/:id", getEmployeeById);

router.post("/", addEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;