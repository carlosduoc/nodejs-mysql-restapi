import { pool } from "../db.js"

export const queryBd = async(req, res)=> {
    const [result]  = await pool.query ('select 1 + 1 as result')
    res.json(result[0])}
