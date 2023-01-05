import { createPool } from "mysql2/promise";

import { BD_HOST, BD_PORT, BD_DATABASE, BD_USER, BD_PASSWORD } from "./config.js";


export const pool = createPool({

    host:BD_HOST,
    user:BD_USER,
    port:BD_PORT,
    password:BD_PASSWORD,
    database:BD_DATABASE
})







