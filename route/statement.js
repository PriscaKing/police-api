import {Router} from "express";
import { addStatement, deleteStatement, getStatementByID, getStatements, updateStatus } from "../controllers/statement_controllers.js";
import { StatementModel } from "../models/statement_model.js";

// const statementRouter = Router();



// statementRouter.get('/statement',(req, res)=>{
//     res.json('List of statements');
// });


// statementRouter.post('/statement',(req, res) =>{
//     res.json('Needed statements');
// });

// export default statementRouter;


const statementRouter = Router();

statementRouter.post("/statement", addStatement);

statementRouter.get('/statement/:id', getStatementByID);

statementRouter.get('/statement', getStatements);

statementRouter.patch('/statement/:id/:caseStatus', updateStatus);

statementRouter.delete('/statement/:id', deleteStatement);



export default statementRouter;


