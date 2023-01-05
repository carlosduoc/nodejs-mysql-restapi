import { pool } from "../db.js"




export const getEmployees = async(req, res)=> {
try{

const [rows] = await pool.query ('select * from employee')
res.json(rows)

}catch (error){

return res.status(500).json({message: 'algo esta mal'}) }

}



export const getEmployee = async(req, res)=> {
    
   
     const [rows] = await pool.query ('select * from employee where id =?', [req.params.id])
    
    if (rows.length <=0) return res.status(404).json({
        message: 'employee not found'})
    
    res.json(rows[0])

   
}





export const createEmployees = async (req, res)=> {
const {name, salary} = req.body
const [rows] = await pool.query ('insert into employee (name, salary) values (?,? )', [name,salary ])
res.send({
    id: rows.insertId,
    name,
    salary,
})
} 



export const deleteEmployees = async (req, res)=> {

    const [result] = await pool.query ('delete from employee where id = ?', [req.params.id])
    console.log(result)

    if (result.affectedRows <= 0) return res.status (404).json({message: 'Usuario no encontrado'})
    
    res.sendStatus(204)

}



export const updateEmployees = async (req, res)=> {
    const {id} = req.params
    const {name,salary} = req.body
    const [result] = await pool.query ('update employee set name = ?, salary = ? where id = ?', [name, salary, id] )
    
    if (result.affectedRows === 0 ) return res.status (404).json({message: ' no se pudo actualizar'})

    const [rows] = await pool.query ('SELECT * FROM employee WHERE id = ?',[id])
    
    res.json(rows[0])
}




export const updateEmploy = async (req, res)=> {
    const {id} = req.params
    const {name,salary} = req.body
    const [result] = await pool.query ('update employee set name = IFNULL(?, name), salary = IFNULL(?, salary) where id = ?', [name, salary, id] )
    
    if (result.affectedRows === 0 ) return res.status (404).json({message: ' no se pudo actualizar'})

    const [rows] = await pool.query ('SELECT * FROM employee WHERE id = ?',[id])
    
    res.json(rows[0])
}
