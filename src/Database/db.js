import knex from "knex";
import {db} from "../config/index.js"

export const connection=knex({
    client:db.client,
    connection:{
        host:db.host,
        database:db.database,
        password:db.password,
        user:db.user,
        port:db.port
    }
})

