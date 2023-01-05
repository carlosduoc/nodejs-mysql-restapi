console.log("hola mundo")
import Express from 'express'
import employeesRouters from './routes/employees.routes.js'
import indexRouters from './routes/index.routers.js'



const app = Express()

app.use(Express.json())

app.use(indexRouters)
app.use('/api',employeesRouters)

app.use((req,res, next)=>{
    res.status(404).json({message:'página no encontrada, intente nuevamente'})
})

export default app;