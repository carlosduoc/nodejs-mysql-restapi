import { Router } from "express"
import {queryBd } from '../controllers/index.controllers.js'



const router = Router()

router.get("/ping", queryBd );


export default router

