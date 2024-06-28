import express from 'express';
import statementRouter from './route/statement.js'
import 'dotenv/config'
import { dbConnection } from './config/db.js';

// //Alternate config
// import * as dotenv from 'dotenv'
// dotenv.config



const app = express();

dbConnection()

app.use(express.json());


app.use(statementRouter);


app.get('/', (req,res) =>{
    res.json('Welcome');
});


app.listen(4000,()=>{
console.log('Listening');
});