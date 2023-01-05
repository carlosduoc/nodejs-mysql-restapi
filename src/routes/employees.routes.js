import { Router } from 'express'
import { getEmployees, getEmployee, createEmployees, updateEmployees, updateEmploy, deleteEmployees  } from '../controllers/employees.controllers.js'


const router = Router()

router.get("/employees", getEmployees )
router.get('/employee/:id', getEmployee )
router.post("/employees", createEmployees)
router.put("/employees/:id", updateEmployees)
router.patch("/employees/:id", updateEmploy)
router.delete("/employees/:id", deleteEmployees)

export default router
